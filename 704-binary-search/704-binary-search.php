class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer
     */
    function search($nums, $target) {
         if(in_array($target,$nums)){
            $key = array_search($target,$nums);
            return $key;
        }else{
            return -1;
        }
    }
}