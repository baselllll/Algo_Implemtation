class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function subtractProductAndSum($n) {
        $arr = str_split($n);
        $sum = array_sum($arr);
        $multi = array_product($arr);
        return $multi-$sum;
    }
}