# Probabilistic Methods - List 02 Solutions

This file is prepared in a screen-share-ready digital format, matching the tutorial format requested during class: clear Markdown, correct formulas, and short explanations of why each counting model applies.

Optional extra presentation file:

- `list-02-model-explorer.html`

## Quick Reminder

Before choosing a formula, always ask:

1. Are we using all objects or only some of them?
2. Does order matter?
3. Is repetition allowed?
4. Are some objects identical?
5. Is the arrangement linear or circular?

## Task 1 - Recognizing Counting Models

### 1. Arranging 7 students in a line

Model: **permutation**

Reason: all `7` students are used, order matters, no repetition.

### 2. Choosing 4 members of a committee from 12 people

Model: **combination**

Reason: only `4` people are chosen, order does not matter.

### 3. Assigning gold, silver, and bronze medals among 15 athletes

Model: **k-permutation**

Reason: only `3` athletes are selected, and the order of medals matters.

### 4. Forming a 6-digit PIN code

Model: **sequence with repetition**

Reason: order matters, repetition is allowed, and each position is chosen independently.

### 5. Arranging the letters of the word BANANA

Model: **permutation with repeated elements**

Reason: all letters are arranged, but some letters are identical.

### 6. Seating 6 people around a round table

Model: **circular permutation**

Reason: all people are used and arrangements that differ only by rotation are the same.

## Task 2 - Permutations

### 1. Arranging 8 different books on a shelf

All `8` books are distinct and order matters, so:

$$
8! = 40320.
$$

### 2. Arranging 8 people in a row if two particular people must sit next to each other

Treat the two particular people as one block. Then we arrange:

- the block,
- the other `6` people.

So there are `7` objects in total, and the two people inside the block may switch places:

$$
7! \cdot 2 = 5040 \cdot 2 = 10080.
$$

### 3. Arranging 8 people in a row if those two people must not sit next to each other

Use the complement:

$$
8! - 7! \cdot 2 = 40320 - 10080 = 30240.
$$

### 4. Ordering 10 questions if the first question is fixed

The first position is already determined, so only the remaining `9` questions may be permuted:

$$
9! = 362880.
$$

## Task 3 - Permutations with Repeated Elements

The original list skips item `2`, so below I solve the three listed subproblems.

### 1. Distinct arrangements of MISSISSIPPI

The word has `11` letters with multiplicities:

- `M`: `1`,
- `I`: `4`,
- `S`: `4`,
- `P`: `2`.

Therefore:

$$
\frac{11!}{4!4!2!}
= \frac{39916800}{24 \cdot 24 \cdot 2}
= 34650.
$$

### 2. Distinct arrangements of STATISTICS

The word has `10` letters with multiplicities:

- `S`: `3`,
- `T`: `3`,
- `I`: `2`,
- `A`: `1`,
- `C`: `1`.

Hence:

$$
\frac{10!}{3!3!2!}
= \frac{3628800}{6 \cdot 6 \cdot 2}
= 50400.
$$

### 3. Arrangements of STATISTICS that start with S

Fix the first letter as `S`. Then we arrange the remaining `9` letters:

- `S`: `2`,
- `T`: `3`,
- `I`: `2`,
- `A`: `1`,
- `C`: `1`.

Thus:

$$
\frac{9!}{2!3!2!}
= \frac{362880}{2 \cdot 6 \cdot 2}
= 15120.
$$

## Task 4 - Circular Permutations

### 1. Seating 7 people around a round table

For circular arrangements of `n` distinct people:

$$
(n-1)!.
$$

So here:

$$
(7-1)! = 6! = 720.
$$

### 2. Seating 7 people if two particular people must sit next to each other

Treat the two particular people as one block. Then we have:

- one block,
- five other people,

so `6` objects around a circle.

The number of circular arrangements is:

$$
(6-1)! = 5!.
$$

The two people inside the block may switch places, so:

$$
5! \cdot 2 = 120 \cdot 2 = 240.
$$

### 3. Seating 7 people if two particular people must sit opposite each other

This is impossible for `7` people around a round table, because with an odd number of seats there is no diametrically opposite seat.

Therefore:

$$
0.
$$

## Task 5 - Combinations

### 1. A committee of 4 people chosen from 12 students

$$
\binom{12}{4} = 495.
$$

### 2. Committees containing a particular student

Fix that student and choose the remaining `3` members from the other `11` students:

$$
\binom{11}{3} = 165.
$$

### 3. Committees containing at least one of two particular students

Use the complement:

- total committees: `\binom{12}{4}`,
- committees containing neither of the two students: `\binom{10}{4}`.

Hence:

$$
\binom{12}{4} - \binom{10}{4}
= 495 - 210
= 285.
$$

### 4. Committees containing exactly two women from 7 men and 5 women

Choose:

- `2` women from `5`,
- `2` men from `7`.

So:

$$
\binom{5}{2}\binom{7}{2}
= 10 \cdot 21
= 210.
$$

## Task 6 - Combinations in Card Problems

We count unordered `5`-card hands.

### 1. Hands containing exactly 2 hearts

Choose:

- `2` hearts from `13`,
- `3` non-hearts from `39`.

Thus:

$$
\binom{13}{2}\binom{39}{3}
= 78 \cdot 9139
= 712842.
$$

### 2. Hands containing at least one heart

Use the complement:

- all `5`-card hands: `\binom{52}{5}`,
- hands with no hearts: `\binom{39}{5}`.

Therefore:

$$
\binom{52}{5} - \binom{39}{5}
= 2598960 - 575757
= 2023203.
$$

### 3. Hands containing no face cards

Face cards are `J, Q, K`, so there are:

$$
3 \cdot 4 = 12
$$

face cards and

$$
52 - 12 = 40
$$

non-face cards.

Hence:

$$
\binom{40}{5} = 658008.
$$

## Task 7 - k-Permutations (Ordered Selections Without Repetition)

### 1. Assigning the first three places among 12 runners

This is an ordered selection of `3` runners from `12`:

$$
P(12,3) = \frac{12!}{9!} = 12 \cdot 11 \cdot 10 = 1320.
$$

### 2. Forming 4-digit numbers with distinct digits from 1-9

We choose and order `4` distinct digits from the `9` digits `1,2,\dots,9`:

$$
P(9,4) = 9 \cdot 8 \cdot 7 \cdot 6 = 3024.
$$

### 3. How many of these numbers are divisible by 5

A number is divisible by `5` if its last digit is `0` or `5`.
Here `0` is not available, so the last digit must be `5`.

Fix the last digit as `5`. Then choose and order the first three digits from the remaining `8` digits:

$$
P(8,3) = 8 \cdot 7 \cdot 6 = 336.
$$

## Task 8 - Sequences with Repetition

### 1. Number of 5-digit PIN codes if digits may repeat

A PIN code may start with `0`, so each of the `5` positions has `10` choices:

$$
10^5 = 100000.
$$

### 2. Number of such codes containing at least one repeated digit

Use the complement:

- all codes: `10^5`,
- codes with all digits different: `P(10,5)`.

Now:

$$
P(10,5) = 10 \cdot 9 \cdot 8 \cdot 7 \cdot 6 = 30240.
$$

Therefore:

$$
100000 - 30240 = 69760.
$$

### 3. Number of such codes with all digits different

$$
P(10,5) = 30240.
$$

## Task 9 - Digit Restrictions

Now we count **5-digit numbers**, so the first digit cannot be `0`.

### 1. Number of 5-digit numbers

The first digit has `9` choices (`1` to `9`), and each of the remaining `4` digits has `10` choices:

$$
9 \cdot 10^4 = 90000.
$$

### 2. Number of even 5-digit numbers

The last digit must be even, so it has `5` choices: `0,2,4,6,8`.

Thus:

$$
9 \cdot 10^3 \cdot 5 = 45000.
$$

### 3. Number of 5-digit numbers with no repeated digits

Choose:

- first digit: `9` choices (`1` to `9`),
- second digit: `9` choices (all remaining digits, including `0`),
- third digit: `8` choices,
- fourth digit: `7` choices,
- fifth digit: `6` choices.

So:

$$
9 \cdot 9 \cdot 8 \cdot 7 \cdot 6 = 27216.
$$

### 4. Number of 5-digit numbers with at least one repeated digit

Use the complement:

$$
90000 - 27216 = 62784.
$$

## Task 10 - Urn Models

The urn contains:

- `5` red balls,
- `4` blue balls,
- `3` green balls.

In parts `1-2`, we count actual samples of balls and ignore order.  
In parts `3-4`, only the **sequence of colors** is recorded.

### 1. Three balls drawn without replacement, order ignored

There are `12` balls in total, so the number of unordered samples is:

$$
\binom{12}{3} = 220.
$$

### 2. Samples containing exactly two red balls

Choose:

- `2` red balls from `5`,
- `1` non-red ball from the remaining `7` balls.

Hence:

$$
\binom{5}{2}\binom{7}{1}
= 10 \cdot 7
= 70.
$$

### 3. Three balls drawn and the order of colors is recorded

Now the outcome is a sequence of length `3` over the colors `{R,B,G}`.

Since the urn contains `5` red, `4` blue, and `3` green balls, every color sequence of length `3` is feasible, including `GGG`:

$$
3^3 = 27.
$$

### 4. Outcomes containing exactly two red balls

Choose the position of the non-red color:

$$
\binom{3}{1} = 3
$$

and choose whether that non-red color is blue or green:

$$
2.
$$

Therefore:

$$
3 \cdot 2 = 6.
$$

The six sequences are:

$$
RRB,\ RBR,\ BRR,\ RRG,\ RGR,\ GRR.
$$

## Task 11 - Modeling Outcomes

## 1. Distinguishable vs Indistinguishable Objects

The box contains:

- `4` red balls,
- `4` blue balls,
- `3` green balls.

So there are `11` balls in total.

### 1. Linear arrangements if balls of the same color are indistinguishable

This is a permutation with repeated elements:

$$
\frac{11!}{4!4!3!}
= \frac{39916800}{24 \cdot 24 \cdot 6}
= 11550.
$$

### 2. Arrangements if every ball is individually labeled

Now all `11` balls are distinct, so:

$$
11! = 39916800.
$$

### 3. Why are the answers different

In part `1`, swapping two balls of the same color does not create a new arrangement, because those balls are indistinguishable. In part `2`, every ball has its own label, so exchanging two balls creates a different arrangement. That is why the second count is much larger.

## 2. Recording Order vs Ignoring Order

Three balls are drawn without replacement from the same box.

### 1. Outcomes if only the set of colors is recorded

Strictly speaking, this is an **unordered multiset of colors**, because repeated colors are allowed.

We need the number of multisets of size `3` chosen from the `3` colors `{R,B,G}`. Since the box contains enough balls of each color to realize every such multiset, the number is:

$$
\binom{3+3-1}{3} = \binom{5}{3} = 10.
$$

These outcomes are:

$$
RRR,\ RRB,\ RRG,\ RBB,\ RBG,\ RGG,\ BBB,\ BBG,\ BGG,\ GGG.
$$

### 2. Outcomes if the sequence of colors is recorded

Now the result is an ordered sequence of length `3` over `{R,B,G}`:

$$
3^3 = 27.
$$

### 3. Why recording order changes the counting model

If order is ignored, outcomes like `RBG`, `BGR`, and `GRB` all describe the same color selection. If order is recorded, these are different outcomes. Therefore the model changes from an unordered color multiset to an ordered sequence.

## 3. PIN Code vs Number

### 1. Number of 4-digit PIN codes if repetition is allowed

Each position may contain any digit from `0` to `9`, so:

$$
10^4 = 10000.
$$

### 2. Number of 4-digit numbers

For a `4`-digit number, the first digit cannot be `0`, so:

$$
9 \cdot 10^3 = 9000.
$$

### 3. Why PIN code and number use different rules

A PIN code is an identifier, not a decimal number. It may begin with `0`, so codes like `0427` are valid. A `4`-digit number cannot begin with `0`, because leading zero does not change the number's value.

### 4. Why 1234 and 4321 are different outcomes

Because a PIN code is an ordered sequence of digits. Changing the positions changes the code, so `1234` and `4321` must be treated as different outcomes.

## Task 12 - Mixed Counting Problem

## 1. Student ID Codes

The identifier has:

- two letters from `{A,B,C,D,E}`,
- followed by three digits from `0` to `9`.

### 1. Letters and digits may repeat

Model:

- letters: sequence with repetition,
- digits: sequence with repetition.

Count:

$$
5^2 \cdot 10^3 = 25 \cdot 1000 = 25000.
$$

### 2. Letters may not repeat but digits may repeat

Model:

- letters: `k`-permutation `P(5,2)`,
- digits: sequence with repetition.

Thus:

$$
P(5,2)\cdot 10^3
= (5 \cdot 4)\cdot 1000
= 20000.
$$

### 3. Neither letters nor digits may repeat

Model:

- letters: `P(5,2)`,
- digits: `P(10,3)`.

Hence:

$$
P(5,2)P(10,3)
= (5 \cdot 4)(10 \cdot 9 \cdot 8)
= 20 \cdot 720
= 14400.
$$

## 2. Medal Assignment

### 1. Medals assigned among 12 runners

Model: `k`-permutation.

$$
P(12,3) = 12 \cdot 11 \cdot 10 = 1320.
$$

### 2. Two particular runners must both receive medals

Let the two special runners be `A` and `B`.

Choose the third medalist from the remaining `10` runners, then assign gold, silver, and bronze to the three medalists:

$$
10 \cdot 3! = 10 \cdot 6 = 60.
$$

## 3. Committee Selection

There are `10` students: `6` men and `4` women.

### 1. Number of committees of 4 people

$$
\binom{10}{4} = 210.
$$

### 2. Committees containing exactly two women

Choose:

- `2` women from `4`,
- `2` men from `6`.

Therefore:

$$
\binom{4}{2}\binom{6}{2}
= 6 \cdot 15
= 90.
$$

### 3. Committees containing at least one woman

Use the complement:

- all committees: `\binom{10}{4}`,
- all-male committees: `\binom{6}{4}`.

So:

$$
\binom{10}{4} - \binom{6}{4}
= 210 - 15
= 195.
$$

## 4. Circular Seating

### 1. Seven people around a round table

$$
(7-1)! = 6! = 720.
$$

### 2. Two particular people sit next to each other

Treat them as one block. Then there are `6` objects around the circle:

$$
(6-1)! \cdot 2
= 5! \cdot 2
= 240.
$$

## 5. Passwords

Each character may be:

- one of `10` digits,
- or one of `26` letters.

So there are:

$$
10 + 26 = 36
$$

possible characters.

### 1. Passwords if repetition is allowed

Model: sequence with repetition.

$$
36^5 = 60466176.
$$

### 2. Passwords if no character may repeat

Model: `k`-permutation.

$$
P(36,5)
= 36 \cdot 35 \cdot 34 \cdot 33 \cdot 32
= 45239040.
$$

### 3. Counting model in each case

- repetition allowed -> **sequence with repetition**,
- no repetition -> **k-permutation**.

## Short Presentation Note

If you are asked to present during class, the safest structure is:

1. start with the four model questions: all/some, order, repetition, identical,
2. name the model before writing the formula,
3. only then compute the number,
4. if he asks for something extra, open `list-02-model-explorer.html` and show how the decision logic works.
