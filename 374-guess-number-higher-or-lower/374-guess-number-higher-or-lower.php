/** 
 * The API guess is defined in the parent class.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * public function guess($num){}
 */

class Solution extends GuessGame {
    /**
     * @param  Integer  $n
     * @return Integer
     */
    function guessNumber($n) {
        $left=1;
        $right=$n;
        while($left!=$right){
            $medium = floor(($left + $right) / 2);
             $guessResult = $this->guess($medium);
            if ($guessResult === 0) {
                return $medium;
            }
            if ($guessResult === -1) {
                $right = $medium - 1;
            }
            if ($guessResult === 1) {
                $left = $medium + 1;
            }
        }
        return $right;
    }
}