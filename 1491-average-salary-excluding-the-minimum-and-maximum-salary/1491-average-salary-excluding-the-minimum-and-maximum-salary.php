class Solution {

    /**
     * @param Integer[] $salary
     * @return Float
     */
    function average($salary) {
         $sum = 0;
        $count=0;
        sort($salary);
       for ($i=1; $i < count($salary)-1 ; $i++) { 
           $sum = $sum+$salary[$i];
           $count = $count+1;
       }
       return $sum/$count; 
    }
}