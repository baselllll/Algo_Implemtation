class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function runningSum($nums) {
        // $arr = array($nums[0]);
        // for ($i=0; $i < sizeof($nums)-1; $i++) { 
        //     $new_item = $nums[$i+1] = $nums[$i]+$nums[$i+1];
        //     array_push($arr, $new_item);
        // }
        // return $arr;
        $current[0] = $nums[0];
        for ($i=1; $i < sizeof($nums); $i++) { 
            $current[$i] = $nums[$i]+ $current[$i-1];
        }
        return $current;
    }
}