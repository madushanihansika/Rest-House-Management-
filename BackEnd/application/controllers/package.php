<?php
/**
 * Created by IntelliJ IDEA.
 * User: USER
 * Date: 5/22/2018
 * Time: 4:17 PM
 */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class Package extends CI_Controller
{
	public function __construct()
	{
		parent::_construct();
		$this->load->model('package_model');
	}

	public function getPackage($packageId = ''){
		$data = $this->package_model->getPackage($packageId);
		print_r($data);

		$this->output->enable_profiler();
	}

	public function insert(){
		$result = $this->package_model->insert([
			'packageId' => 'packagename'
		]);
		print_r($result);
	}

	public function update(){

	}

	public function delete(){

	}
}
