class Solution {

    /**
     * @param Integer[] $arr
     * @return Boolean
     */
    function canMakeArithmeticProgression($arr) {
        sort($arr);
    $sum=abs($arr[1]-$arr[0]);
    
    for($i=0;$i<count($arr)-1;$i++)
        if($arr[$i+1]-$arr[$i]!==$sum)
        {
            return false;
        }
    return true;
    }
}