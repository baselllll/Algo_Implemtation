class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function pivotIndex($nums) {
         $totalSum=array_sum($nums);

        $leftSum = 0; 
        for ($i = 0; $i < sizeof($nums); $i++) {
            if ($totalSum === $leftSum*2 + $nums[$i]) return $i;
            $leftSum += $nums[$i];
        }
        return -1;

    }
}