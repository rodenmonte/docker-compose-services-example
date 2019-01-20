<?php
// Echo a json for testing
header('Content-Type: application/json');
echo json_encode(['status' => 'ok', 'time' => date('Y-m-d-H-i-s')]);

