<?php
/**
 * Created by IntelliJ IDEA.
 * User: Krishanthi
 * Date: 5/25/2018
 * Time: 7:38 PM
 */
class register_model extends CI_Model
{
    public function newRegistration($data)
    {
        $this->db->insert('newRegistration',$data);
        return $this->db->affected_rows();
    }
    public function getRegister($userid = '')
    {
        $this->db->select('*');
        $query = $this->db->get_where('ConstructorRegister',['UserID' => $userid]);
        return json_encode($query->result());
    }
}