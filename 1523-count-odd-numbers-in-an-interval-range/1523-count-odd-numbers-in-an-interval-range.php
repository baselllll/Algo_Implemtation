class Solution {

    /**
     * @param Integer $low
     * @param Integer $high
     * @return Integer
     */
    function countOdds($low, $high) {
       $re = $high-$low;
        if($re==1)return 1;
        $ans = floor($re / 2);
        if($low%2!==0 or $high%2 !==0){
            $ans++;
        }
        return $ans;
    }
}