<?php
include "conn.php";
$result=$conn->query("SELECT * FROM shoplist");
$arr=Array();
for($i=0;$i<$result->num_rows;$i++){
    $arr[$i]=$result->fetch_assoc();
}
echo json_encode($arr);
?>