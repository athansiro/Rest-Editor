<?php
if(!defined('BASEPATH'))
	exit('No direct script access allowed');
class SampleService_model extends CI_Model {
	
    public function __construct() {
        parent::__construct();
        /**init database***/
        $this->load->database('sample',TRUE);
    }

    public function postInfo($name, $age){
        /****insert query string**/
        $query = "insert into sampleTable(name, age) values('?', '?')";

        /**insert to database table***/
        $result =  $this->db->query($query, array($name,$age));

        /**return inserted action result***/
        return $result;
    }


}
