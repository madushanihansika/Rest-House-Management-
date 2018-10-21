<?php
/**
 * Created by IntelliJ IDEA.
 * User: USER
 * Date: 5/22/2018
 * Time: 3:55 PM
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class Instrument extends CI_Controller
{
	public function __construct()
	{
		parent::_construct();
		$this->load->model('instument_model');
	}
		public function getInstrument($instumentId = ''){
		$data = $this->instrument_model->getInstrument($instumentId);
		print_r($data);

		$this->output->enable_profiler();
	}

	public function insert(){
		$result = $this->instrument_model->insert([
			'instumentId' => 'instrumentName',
			'instrumentFee'
		]);
		print_r($result);
	}

	public function update(){

	}

	public function delete(){

	}


//	public function __construct()
//	{
//		parent::_construct();
//
//		if (isset($_SERVER['HTTP_ORIGIN'])) {
//			header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
//			header('Access-Control-Allow-Credentials: true');
//			header('Access-Control-Max-Age: 86400');
//		}
//		if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
//			if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
//				header("Access-Control-Allow-Methods: GET, POST,OPTIONS");
//
//			if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
//				header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
//
//			exit(0);
//		}
////		$this->load->model('instrument_model');
//		$this->load->model('instrument_model', 'instrument'); // Loading model
//
//
//	}
//
//	public function users()
//	{
//
//		switch($_SERVER['REQUEST_METHOD']){
//			case 'GET':
//				$result = $this->instrument->getInstrument();
//				echo json_encode($result);
//				break;
//			case 'POST':
//				$datas = json_decode(file_get_contents("php://input"));
//				$result = $this->instrument->insert($datas);
//				echo json_encode($result);
//				break;
//
//		}
//	}

}
