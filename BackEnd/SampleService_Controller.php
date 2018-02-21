<?php
if (!defined('BASEPATH'))
	exit('No direct script access allowed');
class SampleService_Controller extends CI_Controller {

	public $dashboard_id;

	// 생성자
	public function __construct() {
		parent::__construct();
		$this -> load -> model('SampleService_model', '', TRUE);
	}

	public function postJson_post(){
		/**GET post json data***/
		$getJsonString =  $this -> input -> post('jsonData');

		/**Decode json data***/
		$jsonObjDecode = json_decode($getJsonString);

		/**Parse json data***/
		$name = $jsonObjDecode->{'name'};
		$age = $jsonObjDecode->{'age'};

		try{
			/**Send json data to model to insert***/
            $result = $this->SampleService_model->postInfo($name, $age);

			/**Response json_encoded result to UI***/
            print json_encode($result);

        } catch (Exception $e) {
            print('error' + $e->getMessage() . ' in ' . $e->getFile() . ':' . $e->getLine());
        }
	}

}
?>