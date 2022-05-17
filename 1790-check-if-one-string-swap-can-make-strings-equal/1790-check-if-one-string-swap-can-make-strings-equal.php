class Solution {

    /**
     * @param String $s1
     * @param String $s2
     * @return Boolean
     */
   function areAlmostEqual($s1, $s2) {
        if ($s1 === $s2) {
            return true;
        }
        
        $s3 = $s4 = '';
        for ($i = 0; $i < strlen($s1); $i++) {
            if ($s1[$i] !== $s2[$i]) {
                $s3 .= $s1[$i];
                $s4 .= $s2[$i];
            }
        }
        
        return strlen($s3) === 2 && $s3[0] === $s4[1] && $s3[1] === $s4[0];
    }
}