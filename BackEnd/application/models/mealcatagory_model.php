<?php
/**
 * Created by IntelliJ IDEA.
 * User: USER
 * Date: 5/15/2018
 * Time: 3:14 PM
 */

class Mealcatagory_model extends CI_Model
{
	public function getAll(){
		$query = $this->db->get('mealcatagory');
		return json_encode($query->result());
	}

	public function getMealCata($mealCataId = null){
		$this->db->select('*');
		$query = $this->db->get_where('mealcatagory',['mealcatagoryId' => $mealCataId]);
		return json_encode($query->result());

//		if ($mealCataId === null){
//			$query = $this->db->get('mealcatagory');
//		}else{
//			$this->db->get_where('mealcatagory',['mealcatagoryId' => $mealCataId]);
//		}
//		return $query->result_array();
	}

	public function insert($data){
		$this->db->insert('mealcatagory',$data);
		return $this->db->insert_id();
	}
}
