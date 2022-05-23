class Solution {

    /**
     * @param Integer $num
     * @return Boolean
     */
    function isPerfectSquare($num) {
        $l = 1;
        $r = $num;
        $mid = 0;
        $sqr = 0;
        if ($num < 2){
            return true;
        }
        
        while ($l <= $r){
            $mid = intval(($l + $r)/2);
            if ($mid*$mid == $num){
                return true;
            }elseif ($mid*$mid > $num){
                $r = $mid-1;
            }else{
                $l = $mid+1;
                $sqr = $mid;
            }
        }
        return false;
    }
}