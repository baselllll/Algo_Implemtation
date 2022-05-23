class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer
     */
    function searchInsert($nums, $target) {
          $index =  array_search($target,$nums);
        if(!$index==0){
            return $index;
        }else{
            $nums[]=$target;
            sort($nums);
            $index = array_search($target,$nums);
            return $index;
        }   
    }
}