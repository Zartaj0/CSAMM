# Simple Constant Sum Automated Market Maker

This is one of the types of different approaches for Automated Market Making in DeFi.

This approach takes the sum of the two tokens in the liquidity pool and marks the sum as constant, which should never be changed.
Whenever someone swaps or adds liquidity to the pool this constant should remain the same.

Inserting the condition of 1:1 ratio for both tokens, that means if you are swapping 100 token 'A' with token 'B' then the pool will give you 100 token 'B' to maintain the constant. 
