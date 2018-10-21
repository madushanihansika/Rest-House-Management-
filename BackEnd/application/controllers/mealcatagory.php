<?php
/**
 * Created by IntelliJ IDEA.
 * User: USER
 * Date: 5/15/2018
 * Time: 3:24 PM
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class Mealcatagory extends CI_Controller{

	public function __construct()
	{
		parent::_construct();
		$this->load->model('mealcatagory_model');
	}

	public function getMealCata($mealcatagoryId = ''){
		$data = $this->mealcatagory_model->getMealCata($mealcatagoryId);
		print_r($data);

		$this->output->enable_profiler();
	}

	public function insert(){
		$result = $this->mealcatagory_model->insert([
			'mealcatagoryId' => 'mealcatagoryName'
		]);
		print_r($result);
	}

	public function update(){

	}

	public function delete(){

	}

}
