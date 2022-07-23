class Solution {

    /**
     * @param String $s
     * @param String $t
     * @return Boolean
     */
   function isSubsequence($s, $t) {
        $num = 0;
     
        for($i = 0; $i < strlen($t); $i++){
            if($t[$i] == $s[$num]){
                $num++;
            } 
        }
        return (strlen($s) <= $num);
    }
}