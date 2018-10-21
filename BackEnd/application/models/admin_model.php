<?php
/**
 * Created by IntelliJ IDEA.
 * User: USER
 * Date: 5/15/2018
 * Time: 3:14 PM
 */

class Admin_model extends CI_Model
{
	function checkUser($email){
		$this->db->select('adminId');
		$query = $this->db->get_where('admin',['adminEmail' => $email]);

		if ($query->result_array() != null){
			return 'true';
		}else{
			return 'false';
		}
	}

	function userId($email){
		$this->db->select('adminId');
		$query = $this->db->get_where('admin',['adminEmail' => $email]);

		$aid = null;

		foreach ($query->result() as $row){
			$aid = $row->adminId;
		}

		return $aid;

	}
}
