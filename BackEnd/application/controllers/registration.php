<?php
/**
 * Created by IntelliJ IDEA.
 * User: Krishanthi
 * Date: 5/25/2018
 * Time: 7:51 PM
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class Registration extends CI_Controller
{
    public function __registration()
    {
        parent::__registration();
        $this->load->model('registration_model');
    }
    public function registration()
    {
        $registration = $this->registration_model->getAll();
        echo $registration;
    }
    public function getregistration($userid = '')
    {
        $userid = $this->registration_model-getregistration($userid);
        echo $userid;
    }
}