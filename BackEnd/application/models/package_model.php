<?php
/**
 * Created by IntelliJ IDEA.
 * User: USER
 * Date: 5/22/2018
 * Time: 4:18 PM
 */

class Package_model extends CI_Model
{

	public function getAll(){
		$query = $this->db->get('package');
		return json_encode($query->result());
	}

	public function getPackage($packageId = null){
		$this->db->select('*');
		$query = $this->db->get_where('package',['packageId' => $packageId]);
		return json_encode($query->result());

//		if ($packageId === null){
//			$query = $this->db->get('package');
//		}else{
//			$this->db->get_where('package',['packageId' => $packageId]);
//		}
//		return $query->result_array();
	}

	public function insert($data){
		$this->db->insert('package',$data);
		return $this->db->insert_id();
	}
}
