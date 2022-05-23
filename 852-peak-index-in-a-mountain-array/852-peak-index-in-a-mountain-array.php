class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    function peakIndexInMountainArray($arr) {
        foreach($arr as $k=>$v) {
            if($v > $arr[$k+1]) {
                return $k;
            }
        }   
    }
}