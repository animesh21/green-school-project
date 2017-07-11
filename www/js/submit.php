<?php

	include_once 'org/jsonrpcphp/JsonRPCClient.php';
	define( 'LS_BASEURL','http://studiotesseract.co/audit2016/index.php');  // adjust this one to your actual LimeSurvey URL
	define( 'LS_USER','cseadmin');
	define( 'LS_PASSWORD','C7XuwcRYr9Oy' );

	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET,OPTIONS,POST');
	header('Access-Control-Allow-Headers: ORIGIN, X-Requested-With, Content-Type,Accept');

    $severname = "localhost";
	$username = "ammar_studio";
	$password = "ammar@studio";
	$dbName = "gsp_audit16";
	$conn = new mysqli($severname,$username,$password,$dbName);
    // the survey to process

	$response_data = $_POST['data'];
	$myJSONRPCClient = new \org\jsonrpcphp\JsonRPCClient( LS_BASEURL.'/admin/remotecontrol');
	$sessionKey= $myJSONRPCClient->get_session_key(LS_USER,LS_PASSWORD);
	$response = array();
	$survey_id=266617;

	if(isset($response_data))
	{
		foreach ($response_data as $key => $value)
		{
			$response[$key] = $response_data[$key];
		}
	}
	if($response['login'] == "Yes")
	{
		$sql = "SELECT * FROM `lime_users` WHERE `email` like $response['email']";
		$result = $conn->query($sql);

		if ($result->num_rows > 0)
		{
    		// output data of each row
    		while($row = $result->fetch_assoc())
    		{
    			if($row['email'] == $response['email'] && $row['password'] == $row['pass'])
    				$token = $myJSONRPCClient->add_participants($sessionKey,$survey_id,$response);
    				print_r($token['firstname']['token']);

    				$records = $conn->query("SELECT * FROM `lime_survey_266617` WHERE `token` = '$token'")
    				if($records->num_rows > 0)
    				{
    					while ($row1 = $records->fetch_assoc())
    					{
    						print_r($row1);
    					}
    				}

        		else
        			echo "Denied!";
    		}
		}
		$conn->query();
	}
	else
	{
		$myJSONRPCClient->update_response($sessionKey,$survey_id,$response);
	}

	print_r($response_data);
	$answerSubmit= $myJSONRPCClient->add_response($sessionKey, $survey_id, $response_data);
	$myJSONRPCClient->release_session_key( $sessionKey );
?>
