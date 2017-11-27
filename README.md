## _Texas-holdem
Authors: Nate McGregor, Dan Kiss

Description: Game simulates Texas Holdem style video poker. You win money based on the combination of your cards. You start with a pot of $100.00, and may bet $5,$10, or $20 at a time for each round.


Known bugs:
-Straight that includes an ace as a "1" value does not work.
-Royal Flush is not finished.

| Spec(pot is $100) | bet input | expected pot output |
|------|-------|--------|
| calculate current bet   | $5     | $5      |
| calculate pot   | $5     | $95      |
| calculate win One Pair  | $20     | $120      |
| calculate win Two Pair    | $10     | $130      |
| calculate win Three of a kind    | $10     | $140      |
| calculate win Strait    | $10     | $150      |
| calculate win Flush    | $10     | $160      |
| calculate win Full House    | $10     | $170     |
| calculate win Four of a kind    | $10     | $180      |
| calculate win Strait Flush   | $10     | $190      |
| calculate win Royal Flush    | $10     | $200      |


![Alt text](/img/program.png?raw=true "Screenshot")


GitHub page: https://hal2814.github.io/Texas-Holdem/

copyright Nate McGregor, Dan Kiss Epicodus 2017
