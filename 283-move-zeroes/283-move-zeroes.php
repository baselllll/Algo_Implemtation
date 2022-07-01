class Solution {

    /**
     * @param Integer[] $nums
     * @return NULL
     */
    function moveZeroes(&$nums) {
        for($item = 0;$item < count($nums);$item++){
            $data_selected = $nums[$item];
            if($nums[$item]==0){
                unset($nums[$item]);
                array_push($nums,$data_selected);
            }
        }
    }
}