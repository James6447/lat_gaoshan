<?php
/**
 * 公告类
 *
 * @package Wwin
 * @author iwin <iwin.org@gmail.com>
 * @final
 */
/**

 *
 */
class CombainKeywords
{

    protected function __clone()
    {
        parent::__construct();
    }

    public function sortKeywords($arr, $m)
    {
    	if ($m ==1) {
    	   return $arr;
    	}
    	$result = array();

    	$tmpArr = $arr;
    	unset($tmpArr[0]);
    	for($i=0;$i<count($arr);$i++) {
    		$s = $arr[$i];
    		$ret = $this->sortKeywords(array_values($tmpArr), ($m-1), $result);

    		foreach($ret as $row) {
    			$result[] = $s .' '. $row;
    		}
    	}

        return $result;

    }

}
