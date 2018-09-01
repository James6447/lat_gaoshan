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

    public static function pagination($parameters)
    {
        $page = isset($parameters['page']) ? $parameters['page'] : '1';
        $p    = isset($parameters['p']) ? $parameters['p'] : '1';
        $url_front = isset($parameters['url_front']) ? $parameters['url_front'] : '';
        $url_back  = isset($parameters['url_back']) ? $parameters['url_back'] : '';

        $tag  = '<nav aria-label="Page navigation example">';
        $tag .= '<ul class="pagination justify-content-center">';
        // $tag .= '<li class="page-item arrow">';
        // $tag .= '<a class="page-link" aria-label="Previous">';
        // $tag .= '<span aria-hidden="true">&laquo;</span>';
        // $tag .= ' <span class="sr-only">Previous</span>';
        // $tag .= '</a>';
        // $tag .= '</li>';
        for($i=1;$i<=$page;$i++){
            $tag .= '<li onclick="reset()" class="page-item"><span id="reset" class="page-link" ';
            $tag .= "onclick=".$url_front.$i;
            $tag .= $url_back;
            $tag .= "');>";
                if($i == $p )
                {
                    $tag .= '<span class="page-selected">';
                    $tag .= $i;
                    $tag .= '<span class="sr-only">(current)</span>';
                }else{
                    $tag .= $i;
                }
            $tag .= '</span></li>';
        }
        // $tag .=  '<li class="page-item arrow">';
        // $tag .=  '<a class="page-link" href="#" aria-label="Next">';
        // $tag .=  '<span aria-hidden="true">&raquo;</span>';
        // $tag .=  '<span class="sr-only">Next</span>';
        // $tag .=  '</a>';
        // $tag .=  '</li>';
        $tag .=  '</ul>';
        $tag .=  '</nav>';

        return $tag;
    }
}
