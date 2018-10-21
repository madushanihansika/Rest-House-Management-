<?php
/**
 * Created by IntelliJ IDEA.
 * User: USER
 * Date: 5/26/2018
 * Time: 10:27 PM
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class Login extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();
		$this->load->model('admin_model');
	}

	public function index(){
		$email = $this->input->post('email');
		$password = $this->input->post('password');

		$result = $this->admin_model->check($email, hash('',$password . resthouse));

			if($result == TRUE){
			echo '{
				"success":true,
				"message":"correct"
				}';
			}else{
				echo '{
				"success":false,
				"message":"incorrect"
				}';
			}
	}

}
