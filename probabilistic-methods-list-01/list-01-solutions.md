# Probabilistic Methods - List 1 Solutions

This file is prepared in a screen-share-ready digital format, exactly in the style requested during class: readable Markdown, step-by-step explanations, and clear mathematical notation.

Optional extra presentation file:

- `list-01-visualizations.html`

## Task 1 - Coin Tossing

We assume a fair coin with two possible results:

- `H` = heads
- `T` = tails

Because the order matters, every elementary outcome is an ordered sequence.

### 1. Sample space for one toss

$$
\Omega_1 = \{H, T\}.
$$

### 2. Sample space for two tosses

$$
\Omega_2 = \{(H,H), (H,T), (T,H), (T,T)\}.
$$

### 3. Sample space for three tosses

$$
\Omega_3 = \{
(H,H,H), (H,H,T), (H,T,H), (H,T,T),
(T,H,H), (T,H,T), (T,T,H), (T,T,T)
\}.
$$

### 4. Number of elementary outcomes

Each toss has `2` possibilities, so:

$$
|\Omega_1| = 2,
\qquad
|\Omega_2| = 2^2 = 4,
\qquad
|\Omega_3| = 2^3 = 8.
$$

In general, for `n` tosses:

$$
|\Omega_n| = 2^n.
$$

### 5. Meaning of an elementary outcome

An elementary outcome is one exact ordered result of the experiment:

- for one toss: `H` or `T`,
- for two tosses: an ordered pair such as `(H,T)`,
- for three tosses: an ordered triple such as `(T,H,H)`.

### Small tree diagram for two tosses

```text
Start
|- H
|  |- H -> (H,H)
|  `- T -> (H,T)
`- T
   |- H -> (T,H)
   `- T -> (T,T)
```

## Task 2 - Rolling a Die

We assume a fair six-sided die with possible results `1,2,3,4,5,6`.

### 1. Sample space for one roll

$$
\Omega_1 = \{1,2,3,4,5,6\}.
$$

### 2. Sample space for two consecutive rolls

Since order matters, an elementary outcome is an ordered pair:

$$
\Omega_2 = \{(i,j) : i,j \in \{1,2,3,4,5,6\}\}.
$$

Equivalently, this is the Cartesian product:

$$
\Omega_2 = \Omega_1 \times \Omega_1.
$$

### 3. Sample space for three consecutive rolls

An elementary outcome is now an ordered triple:

$$
\Omega_3 = \{(i,j,k) : i,j,k \in \{1,2,3,4,5,6\}\}.
$$

Equivalently:

$$
\Omega_3 = \Omega_1 \times \Omega_1 \times \Omega_1.
$$

### 4. Number of elementary outcomes

Each roll has `6` possible results, so:

$$
|\Omega_1| = 6,
\qquad
|\Omega_2| = 6^2 = 36,
\qquad
|\Omega_3| = 6^3 = 216.
$$

### 5. Meaning of an elementary outcome

An elementary outcome is one exact ordered sequence of die results:

- one roll: a single number, for example `4`,
- two rolls: an ordered pair, for example `(2,6)`,
- three rolls: an ordered triple, for example `(5,1,3)`.

## Task 3 - Drawing Cards

Let

$$
R = \{A,2,3,4,5,6,7,8,9,10,J,Q,K\}
$$

be the set of ranks and

$$
S = \{C,D,H,S\}
$$

be the set of suits (`C` = clubs, `D` = diamonds, `H` = hearts, `S` = spades).

The full deck is

$$
\mathcal{D} = R \times S,
$$

so `|\mathcal{D}| = 52`.

### 1. Sample space for drawing one card

$$
\Omega_1 = \mathcal{D}.
$$

An elementary outcome is one card such as `(K,H)` or `(7,S)`.

### 2. Sample space for two draws with replacement

After the first draw, the card is returned to the deck, so the same card may appear again.

$$
\Omega_2 = \{(c_1,c_2) : c_1,c_2 \in \mathcal{D}\}
= \mathcal{D} \times \mathcal{D}.
$$

### 3. Sample space for two draws without replacement

Now the second card must be different from the first one:

$$
\Omega_2' = \{(c_1,c_2) \in \mathcal{D} \times \mathcal{D} : c_1 \ne c_2\}.
$$

### 4. Number of elementary outcomes

With replacement:

$$
|\Omega_2| = 52 \cdot 52 = 52^2 = 2704.
$$

Without replacement:

$$
|\Omega_2'| = 52 \cdot 51 = 2652.
$$

### 5. Meaning of an elementary outcome

An elementary outcome is one ordered sequence of drawn cards:

- one draw: one exact card,
- two draws with replacement: an ordered pair of cards, possibly identical,
- two draws without replacement: an ordered pair of two distinct cards.

## Task 4 - Weekly Weather Observation

Each day may be in exactly one of the three states:

$$
\{S,C,R\},
$$

where:

- `S` = sunny,
- `C` = cloudy,
- `R` = rainy.

### 1. Sample space for one day

$$
\Omega_1 = \{S,C,R\}.
$$

### 2. Sample space for two consecutive days

$$
\Omega_2 = \{(x_1,x_2) : x_1,x_2 \in \{S,C,R\}\}.
$$

Explicitly:

$$
\Omega_2 =
\{(S,S),(S,C),(S,R),(C,S),(C,C),(C,R),(R,S),(R,C),(R,R)\}.
$$

### 3. Sample space for seven consecutive days

$$
\Omega_7 = \{(x_1,x_2,\dots,x_7) : x_i \in \{S,C,R\} \text{ for } i=1,\dots,7\}.
$$

### 4. Number of elementary outcomes

Each day has `3` possible states, so:

$$
|\Omega_1| = 3,
\qquad
|\Omega_2| = 3^2 = 9,
\qquad
|\Omega_7| = 3^7 = 2187.
$$

### 5. Meaning of an elementary outcome

For the weekly observation, an elementary outcome is one exact ordered weather sequence for seven days, for example:

$$
(S,C,R,S,S,C,R).
$$

## Task 5 - Buffon's Needle Experiment

We consider a needle of length `L` thrown onto a plane with parallel lines at distance `d`, with `L \le d`.

### 1. Sample space

The outcome of one throw is determined by:

- the distance of the needle's center from the nearest line,
- the angle between the needle and the lines.

### 2. Parameters determining the outcome

Using symmetry, we may restrict to:

- `x \in [0, d/2]` = distance from the center of the needle to the nearest line,
- `\theta \in [0, \pi/2]` = angle between the needle and the lines.

### 3. Elementary outcome

An elementary outcome is the pair

$$
(x,\theta).
$$

### 4. Sample space as a set

Therefore,

$$
\Omega = \{(x,\theta) : 0 \le x \le d/2,\ 0 \le \theta \le \pi/2\}
= [0,d/2] \times [0,\pi/2].
$$

### 5. Why the sample space is continuous

In the previous tasks, the outcomes were discrete and countable. Here `x` and `\theta` may take any real value in intervals, so there are infinitely many possible outcomes. That is why the sample space is continuous.

## Task 6 - Events and Probabilities in Coin Tossing

Because the coin is fair:

- each element of `\Omega_1` has probability `1/2`,
- each element of `\Omega_2` has probability `1/4`,
- each element of `\Omega_3` has probability `1/8`.

### One coin toss

#### Event \(A_1\): the result is heads

$$
A_1 = \{H\}, \qquad P(A_1) = \frac{1}{2}.
$$

#### Event \(B_1\): the result is tails

$$
B_1 = \{T\}, \qquad P(B_1) = \frac{1}{2}.
$$

#### Event \(C_1\): the result is not tails

Not tails means heads, so:

$$
C_1 = \{H\}, \qquad P(C_1) = \frac{1}{2}.
$$

### Two coin tosses

#### Event \(A_2\): exactly one head occurs

$$
A_2 = \{(H,T),(T,H)\}, \qquad P(A_2) = \frac{2}{4} = \frac{1}{2}.
$$

#### Event \(B_2\): at least one head occurs

$$
B_2 = \{(H,H),(H,T),(T,H)\}, \qquad P(B_2) = \frac{3}{4}.
$$

#### Event \(C_2\): both tosses give the same result

$$
C_2 = \{(H,H),(T,T)\}, \qquad P(C_2) = \frac{2}{4} = \frac{1}{2}.
$$

### Three coin tosses

#### Event \(A_3\): exactly two heads occur

$$
A_3 = \{(H,H,T),(H,T,H),(T,H,H)\}, \qquad P(A_3) = \frac{3}{8}.
$$

#### Event \(B_3\): at least one tail occurs

This is the complement of the event `all heads`, so:

$$
B_3 = \Omega_3 \setminus \{(H,H,H)\}, \qquad P(B_3) = 1 - \frac{1}{8} = \frac{7}{8}.
$$

#### Event \(C_3\): all three tosses give the same result

$$
C_3 = \{(H,H,H),(T,T,T)\}, \qquad P(C_3) = \frac{2}{8} = \frac{1}{4}.
$$

#### Additional event \(D_3\): exactly one head occurs

$$
D_3 = \{(H,T,T),(T,H,T),(T,T,H)\}, \qquad P(D_3) = \frac{3}{8}.
$$

## Task 7 - Events and Probabilities in Die Rolling

Because the die is fair:

- each element of `\Omega_1` has probability `1/6`,
- each element of `\Omega_2` has probability `1/36`,
- each element of `\Omega_3` has probability `1/216`.

### One die roll

#### Event \(A_1\): the result is even

$$
A_1 = \{2,4,6\}, \qquad P(A_1) = \frac{3}{6} = \frac{1}{2}.
$$

#### Event \(B_1\): the result is greater than 4

$$
B_1 = \{5,6\}, \qquad P(B_1) = \frac{2}{6} = \frac{1}{3}.
$$

#### Event \(C_1\): the result is at most 3

$$
C_1 = \{1,2,3\}, \qquad P(C_1) = \frac{3}{6} = \frac{1}{2}.
$$

### Two die rolls

#### Event \(A_2\): the sum equals 7

$$
A_2 = \{(i,j) \in \Omega_2 : i + j = 7\}.
$$

The favorable outcomes are:

$$
(1,6),(2,5),(3,4),(4,3),(5,2),(6,1),
$$

so

$$
P(A_2) = \frac{6}{36} = \frac{1}{6}.
$$

#### Event \(B_2\): both results are the same

$$
B_2 = \{(i,i) : i=1,2,3,4,5,6\},
\qquad
P(B_2) = \frac{6}{36} = \frac{1}{6}.
$$

#### Event \(C_2\): the sum is at least 10

$$
C_2 = \{(i,j) \in \Omega_2 : i+j \ge 10\}.
$$

Possible sums:

- `10`: `(4,6),(5,5),(6,4)` -> `3` outcomes,
- `11`: `(5,6),(6,5)` -> `2` outcomes,
- `12`: `(6,6)` -> `1` outcome.

So there are `6` favorable outcomes:

$$
P(C_2) = \frac{6}{36} = \frac{1}{6}.
$$

### Three die rolls

#### Event \(A_3\): the sum equals 10

$$
A_3 = \{(i,j,k) \in \Omega_3 : i+j+k = 10\}.
$$

To count the outcomes, first count positive integer solutions of

$$
i+j+k=10.
$$

Without upper bounds, the number is

$$
\binom{9}{2} = 36.
$$

Now subtract solutions with one variable at least `7`.
For example, if `i \ge 7`, let `i' = i-6 \ge 1`. Then

$$
i' + j + k = 4,
$$

which has

$$
\binom{3}{2} = 3
$$

positive solutions. The same applies to `j` and `k`, so we subtract `3 + 3 + 3 = 9`.
Therefore,

$$
|A_3| = 36 - 9 = 27,
\qquad
P(A_3) = \frac{27}{216} = \frac{1}{8}.
$$

#### Event \(B_3\): exactly two rolls give the same number

Choose:

- the repeated value: `6` choices,
- the different value: `5` choices,
- the position of the different value: `3` choices.

Hence:

$$
|B_3| = 6 \cdot 5 \cdot 3 = 90,
\qquad
P(B_3) = \frac{90}{216} = \frac{5}{12}.
$$

#### Event \(C_3\): the outcomes contain two twos and one three

This means the outcomes are permutations of `(2,2,3)`. There are:

$$
\frac{3!}{2!} = 3
$$

such outcomes, namely:

$$
(2,2,3),(2,3,2),(3,2,2).
$$

Therefore,

$$
P(C_3) = \frac{3}{216} = \frac{1}{72}.
$$

#### Additional event \(D_3\): all three rolls are different

$$
D_3 = \{(i,j,k) \in \Omega_3 : i,j,k \text{ are pairwise different}\}.
$$

The number of favorable outcomes is:

$$
6 \cdot 5 \cdot 4 = 120,
$$

so

$$
P(D_3) = \frac{120}{216} = \frac{5}{9}.
$$

## Task 8 - Events and Probabilities in Card Drawing

Every ordered sequence in the corresponding sample space is equally likely.

Therefore:

- in `\Omega_1`, each elementary outcome has probability `1/52`,
- in `\Omega_2`, each elementary outcome has probability `1/2704`,
- in `\Omega_2'`, each elementary outcome has probability `1/2652`.

### One card drawn

#### Event \(A_1\): the card is a heart

There are `13` hearts, so:

$$
A_1 = \{(r,H) : r \in R\},
\qquad
P(A_1) = \frac{13}{52} = \frac{1}{4}.
$$

#### Event \(B_1\): the card is a king

There are `4` kings, so:

$$
B_1 = \{(K,s) : s \in S\},
\qquad
P(B_1) = \frac{4}{52} = \frac{1}{13}.
$$

#### Event \(C_1\): the card is not a face card

Face cards are `J`, `Q`, `K`, so there are `3 \cdot 4 = 12` face cards.
Hence the number of non-face cards is:

$$
52 - 12 = 40.
$$

Therefore,

$$
C_1 = \{(r,s) \in \Omega_1 : r \notin \{J,Q,K\}\},
\qquad
P(C_1) = \frac{40}{52} = \frac{10}{13}.
$$

### Two cards drawn with replacement

#### Event \(A_2\): both cards are hearts

$$
A_2 = \{(c_1,c_2) \in \Omega_2 : c_1 \text{ and } c_2 \text{ are hearts}\}.
$$

There are `13` choices for the first heart and `13` for the second:

$$
P(A_2) = \frac{13 \cdot 13}{52^2} = \frac{169}{2704} = \frac{1}{16}.
$$

#### Event \(B_2\): both cards have the same rank

For each of the `13` ranks, there are `4` possibilities for the first card and `4` for the second:

$$
|B_2| = 13 \cdot 4 \cdot 4 = 208.
$$

So

$$
P(B_2) = \frac{208}{2704} = \frac{1}{13}.
$$

#### Event \(C_2\): at least one card is an ace

It is easier to use the complement:

$$
P(C_2) = 1 - P(\text{no ace in both draws}).
$$

There are `48` non-aces, so:

$$
P(C_2) = 1 - \left(\frac{48}{52}\right)^2
= 1 - \left(\frac{12}{13}\right)^2
= 1 - \frac{144}{169}
= \frac{25}{169}.
$$

### Two cards drawn without replacement

#### Event \(A_3\): both cards are hearts

There are `13` choices for the first heart and `12` for the second:

$$
P(A_3) = \frac{13 \cdot 12}{52 \cdot 51}
= \frac{156}{2652}
= \frac{1}{17}.
$$

#### Event \(B_3\): both cards have the same rank

Choose the first card arbitrarily (`52` ways), then the second card must be one of the remaining `3` cards of the same rank:

$$
P(B_3) = \frac{52 \cdot 3}{52 \cdot 51}
= \frac{156}{2652}
= \frac{1}{17}.
$$

#### Event \(C_3\): one card is a king and the other is a queen

Two orders are possible:

- first king, then queen: `4 \cdot 4 = 16`,
- first queen, then king: `4 \cdot 4 = 16`.

Hence:

$$
|C_3| = 16 + 16 = 32,
\qquad
P(C_3) = \frac{32}{2652} = \frac{8}{663}.
$$

#### Additional event \(D_3\): both cards have the same suit

After choosing the first card, there are `12` remaining cards of the same suit:

$$
|D_3| = 52 \cdot 12 = 624,
\qquad
P(D_3) = \frac{624}{2652} = \frac{4}{17}.
$$

## Task 9 - Events and Probabilities in Weekly Weather Observation

Let the seven-day outcome be

$$
(x_1,x_2,x_3,x_4,x_5,x_6,x_7),
$$

where:

- `x_1` = Monday,
- `x_2` = Tuesday,
- `x_3` = Wednesday,
- `x_4` = Thursday,
- `x_5` = Friday,
- `x_6` = Saturday,
- `x_7` = Sunday.

Each day is independent and each state `S`, `C`, `R` has probability `1/3`.

Therefore each elementary outcome in `\Omega_7` has probability:

$$
\left(\frac{1}{3}\right)^7 = \frac{1}{2187}.
$$

### Event \(A\): the entire weekend is sunny

$$
A = \{(x_1,\dots,x_7) \in \Omega_7 : x_6 = S,\ x_7 = S\}.
$$

Only Saturday and Sunday are constrained, so:

$$
P(A) = \frac{1}{3} \cdot \frac{1}{3} = \frac{1}{9}.
$$

### Event \(B\): Wednesday, Thursday, and Friday are all rainy

$$
B = \{(x_1,\dots,x_7) \in \Omega_7 : x_3 = R,\ x_4 = R,\ x_5 = R\}.
$$

Thus:

$$
P(B) = \left(\frac{1}{3}\right)^3 = \frac{1}{27}.
$$

### Event \(C\): at least one day during the week is sunny

Use the complement:

$$
P(C) = 1 - P(\text{no sunny day in the whole week}).
$$

If no day is sunny, each day is either cloudy or rainy, so:

$$
P(C) = 1 - \left(\frac{2}{3}\right)^7
= 1 - \frac{128}{2187}
= \frac{2059}{2187}.
$$

### Event \(D\): no rainy day occurs during the entire week

Each day is then either sunny or cloudy:

$$
D = \{(x_1,\dots,x_7) \in \Omega_7 : x_i \in \{S,C\} \text{ for all } i\}.
$$

Therefore:

$$
P(D) = \left(\frac{2}{3}\right)^7 = \frac{128}{2187}.
$$

### Event \(E\): exactly two days during the week are sunny

Choose the two sunny days:

$$
\binom{7}{2} = 21.
$$

For those two days, the probability is `(1/3)^2`. For the remaining five days, the probability of "not sunny" is `(2/3)^5`. Hence:

$$
P(E) = \binom{7}{2}\left(\frac{1}{3}\right)^2 \left(\frac{2}{3}\right)^5
= 21 \cdot \frac{1}{9} \cdot \frac{32}{243}
= \frac{672}{2187}
= \frac{224}{729}.
$$

### Additional event \(F\): Monday and Tuesday have the same weather

$$
F = \{(x_1,\dots,x_7) \in \Omega_7 : x_1 = x_2\}.
$$

The first day can be anything. The probability that the second day matches it is `1/3`, so:

$$
P(F) = \frac{1}{3}.
$$

## Task 10 - Events and Probabilities in Buffon's Needle Experiment

We assume:

- `L \le d`,
- `X \sim \text{Uniform}[0,d/2]`,
- `\theta \sim \text{Uniform}[0,\pi/2]`,
- `X` and `\theta` are independent.

Hence the joint density is constant on the rectangle:

$$
\Omega = [0,d/2] \times [0,\pi/2],
\qquad
f_{X,\theta}(x,\theta) = \frac{1}{(d/2)(\pi/2)} = \frac{4}{\pi d}.
$$

The needle intersects a line exactly when the perpendicular half-projection of the needle is at least the distance to the nearest line:

$$
X \le \frac{L}{2}\sin\theta.
$$

### Event \(A\): the needle intersects one of the lines

$$
A = \left\{(x,\theta) \in \Omega : x \le \frac{L}{2}\sin\theta \right\}.
$$

Therefore:

$$
P(A)
= \int_0^{\pi/2} \int_0^{(L/2)\sin\theta} \frac{4}{\pi d}\,dx\,d\theta
= \frac{4}{\pi d}\int_0^{\pi/2} \frac{L}{2}\sin\theta\, d\theta.
$$

Since

$$
\int_0^{\pi/2} \sin\theta\, d\theta = 1,
$$

we obtain:

$$
P(A) = \frac{4}{\pi d} \cdot \frac{L}{2} = \frac{2L}{\pi d}.
$$

### Event \(B\): the needle does not intersect any line

This is the complement of `A`, so:

$$
P(B) = 1 - P(A) = 1 - \frac{2L}{\pi d}.
$$

### Event \(C\): the angle is smaller than \(\pi/6\)

$$
C = \{(x,\theta) \in \Omega : 0 \le \theta < \pi/6\}.
$$

Because `\theta` is uniform on `[0,\pi/2]`:

$$
P(C) = \frac{\pi/6}{\pi/2} = \frac{1}{3}.
$$

### Event \(D\): the center is at distance less than \(d/4\) from the nearest line

$$
D = \{(x,\theta) \in \Omega : 0 \le x < d/4\}.
$$

Because `X` is uniform on `[0,d/2]`:

$$
P(D) = \frac{d/4}{d/2} = \frac{1}{2}.
$$

### Event \(E\): the needle intersects a line and the angle is greater than \(\pi/4\)

$$
E = \left\{(x,\theta) \in \Omega :
\theta > \frac{\pi}{4},\ x \le \frac{L}{2}\sin\theta \right\}.
$$

Hence:

$$
P(E)
= \int_{\pi/4}^{\pi/2} \int_0^{(L/2)\sin\theta} \frac{4}{\pi d}\,dx\,d\theta
= \frac{4}{\pi d}\int_{\pi/4}^{\pi/2} \frac{L}{2}\sin\theta\, d\theta.
$$

Now:

$$
\int_{\pi/4}^{\pi/2}\sin\theta\, d\theta
= \left[-\cos\theta\right]_{\pi/4}^{\pi/2}
= 0 - \left(-\frac{\sqrt{2}}{2}\right)
= \frac{\sqrt{2}}{2}.
$$

So:

$$
P(E)
= \frac{4}{\pi d} \cdot \frac{L}{2} \cdot \frac{\sqrt{2}}{2}
= \frac{\sqrt{2}L}{\pi d}.
$$

### Additional event \(F\): the needle intersects a line and the angle is smaller than \(\pi/6\)

$$
F = \left\{(x,\theta) \in \Omega :
0 \le \theta < \frac{\pi}{6},\ x \le \frac{L}{2}\sin\theta \right\}.
$$

Then:

$$
P(F)
= \frac{4}{\pi d}\int_0^{\pi/6} \frac{L}{2}\sin\theta\, d\theta
= \frac{2L}{\pi d}\int_0^{\pi/6}\sin\theta\, d\theta.
$$

Since

$$
\int_0^{\pi/6}\sin\theta\, d\theta
= \left[-\cos\theta\right]_0^{\pi/6}
= 1 - \frac{\sqrt{3}}{2},
$$

we get:

$$
P(F)
= \frac{2L}{\pi d}\left(1 - \frac{\sqrt{3}}{2}\right)
= \frac{(2-\sqrt{3})L}{\pi d}.
$$

## Short Presentation Note

If asked during class, the safest order is:

1. open this file in Markdown preview,
2. quickly show that all tasks from the current list are prepared,
3. if he asks for "something extra", open `list-01-visualizations.html`,
4. explain the idea, not only the final result.
