<?php
/**
 * Created by IntelliJ IDEA.
 * User: USER
 * Date: 5/22/2018
 * Time: 4:14 PM
 */

class Instrument_model extends CI_Model
{
	public function getAll(){
		$query = $this->db->get('instrument');
		return json_encode($query->result());
	}
	public function getInstrument($instumentId = ''){
		$this->db->select('*');
		$query = $this->db->get_where('instrument',['instumentId' => $instumentId]);
		return json_encode($query->result());

//		if ($instumentId === null){
//			$query = $this->db->get('instrument');
//		}else{
//			$this->db->get_where('instrument',['instumentId' => $instumentId]);
//		}
//		return $query->result_array();
	}

	public function insert($data){
		$this->db->insert('instrument',$data);
		return $this->db->insert_id();
	}


//	public $variable;
//
//	public function __construct()
//	{
//		parent::_construct();
//	}
//
//	Public function getInstrument()
//	{
//		$where  = array('status' => 1);
//		if(isset($_GET['id'])!=''){
//			$where +=array('_id' => $_GET['id']);
//			return $this->db->get_where('user_details',$where)->row_array();
//		}else{
//			return $this->db->get_where('user_details',$where)->result_array();
//		}
//
//	}
//	Public function insert($datas)
//	{
//		$result = $this->check_delete($datas);
//		if(isset($result)){
//			exit;
//		}else{
//			$response = array('success' => 'User saved successfully !');
//			$data = array(
//				'instrumentName' => $datas->instrumentName,
//				'instrumentFee' => $datas->instrumentFee,
//			);
//			if(isset($datas->_instumentId) && !isset($datas->delete)){
//				$where =array('_instumentId' => $datas->_instumentId);
//				$this->db->update('instument',$data,$where);
//			}else{
//				$this->db->insert('instument',$data);
//			}
//			return $response;
//		}
//	}
//
//	Public function check_delete($datas)
//	{
//		$response = array('success' => 'User deleted successfully !');
//		if(isset($datas->delete) && isset($datas->_id)){
//			$where =array('_instumentId' => $datas->_id);
//			$data =array('status' => 0);
//			$this->db->update('instument',$data,$where);
//			return $response;
//
//		}
//	}

}
