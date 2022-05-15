class Solution {

    /**
     * @param Integer $x
     * @param Integer $y
     * @param Integer[][] $points
     * @return Integer
     */
     function nearestValidPoint($x, $y, $points) {
        $distance = -1;
        $index = -1;
        foreach($points as $k => $i)
            if($i[0] == $x or $i[1] == $y)
                if($distance == -1 or $distance > (abs($i[0] - $x) + abs($i[1] - $y))){
                    $distance = (abs($i[0] - $x) + abs($i[1] - $y));
                    $index = $k;
        }
        return $index;
    }
}