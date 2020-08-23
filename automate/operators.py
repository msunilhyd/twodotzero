** = Exponent, Ex = 2 ** 3 = 8


The Python programming language has a wide range of syntactical constructions,
standard library functions, and interactive development environment features.
Fortunately, you can ignore most of that. You just need to learn enough to
write some handy little programs.

You will, however, have to learn some basic programming concepts before you
can do anything. Like a wizard in training, you might think these concepts
seem arcane and tedious, but with some knowledge and practice, you'll be able
to command your computer like a magic wand and perform incredible feats.

This chapter has a few examples that encourage you to type into the interactive
shell, also called REPL (Read-Evalutate-Print-Loop), which lets you run
(or execute) Python instructions one at a time and instantly show you results.
Using the interactive shell is great for learning what basic Python instructions
do, so give it a try as you follow along. You'll remember the things you do
much better than the things you only read


Entering Expressions into the Interactive Shell:-

You can run the interactive shell by launching the Mu editor, which you should
have downloaded when going through the setup instructions in the Preface.
On Windows, open the start menu, type Mu, and open the Mu app. On MacOs, open
your applications folder and double-click Mu. Click the new button and save
an empty file as blank.py. When you run this blank file by clicking the RUN
button or pressing F5, it will open the interactive shell, which will open
as a new pane, that opens at the bottom of the Mu editor's window. You should
see a >>> prompt in the interactive shell.

    Enter 2 +2 at the prompt to have Python do simple math. The Mu window
    should now look like this:

    >>> 2 + 2
    4
    >>>

In Python, 2 + 2 is called an expression, which is the most basic kind of
programming instruction in the language. Expressions consist of values (such as
2) and operators (such as +), and they can always evaluate (that is, reduce)
down to a single value. That means you can use expressions anywhere in Python
code that you could also use as a value.

In the previous example, 2 + 2, is evaluated down to a single value, 4.
A single value with no operators is also called an expression, though it
evaluates only to itself, as shown here:

>>> 2
2

Errors are okay!
Programs will crash if they contain code, the computer can't understand, which
will cause Python to show an error message. An error message wo'nt break your
computer, though, so don't be afraid to make mistakes. A crash just means
the program stopped running unexpectedly.

If you want to know more about an error, you can search for the exact error
message text online for more information. You can also check out the resources
at https://nostarch.com/automatestuff2/ to see a list of common Python error
messages and their meanings.


You can use plenty of other operators in Python expressions, too.
For example, Table 1-1 lists all the math operators in Python.

Table 1-1: Math Operators from Highes to Lowest Precedence


Operator    Operation               Example         Evaluates to...
**          Exponent                2 ** 3                8
%         Modulus/remainder         22 % 8                6
// Integer Division/Floored Quotient 22 // 8              2
/           Division                22 / 8                2.75
*           Multiplication          3 * 5                 15
-          Subtraction              5 - 2                 3
+           Addition                2 + 2                 4


    The order of operations (also called precedence) of Python math operators
is similar to that of mathematics. The ** operator is evaluated first; the *,
/, //, and % operators are evaluated next, from left to right; and the + and -
operators are evaluated last (also from left to right). You can use parenthe-
ses to override the usual precedence if you need to. Whitespace in between
the operators and values does'nt matter for Python (except for the indentation
at the beginning of the line), but a single space is convention. Enter the
following instructions into the interactive shell:

>>> 2 + 3 * 6
20
>>> (2 + 3) * 6
30
>>> 48565878 * 578453
28093077826734
>>> 2 ** 8
256
>>> 23 / 7
3.2857142857142856
>>> 23 // 7
3
>>> 23 % 7
2
>>> 2          +          2
4
>>> (5-1) * ((7 + 1) / (3 - 1))
16.0

In each case, you as the programmer must enter the expression, but Python
does the hard part of evaluating it down to a single value. Python will keep
evaluating parts of the expression until it becomes a single value,
as shown here:

        (5 - 7) * ((7 + 1) / (3 - 1))
           4    * ((7 + 1) / (3 - 1))
           4    * (   8   )/  (3 -1)
           4    * (   8   )/ (  2  )
           4    * 4.0
                16.0

These rules are for putting operators and values together to form expressions
are a fundamental part of Python as a programming language, just like the
grammer rules that help us communicate. Here's and example"

    This is a grammatically correct English sentence.
    This grammatically is sentence not English correct a

The second line is difficult to parse because it doesn't follow the rules of
English. Similarly, if you enter a bad Python instruction, Python won't be
able to understand it and will display a SyntaxError error message, as
shown here:

>>> 5 +
  File "<stdin>", line 1
  5 +
    ^
SyntaxError: invalid syntax

>>> 42 + 5 + * 2
  File "<stdin>", line 1
    42 + 5 + * 2
             ^
SyntaxError: invalid syntax

You can always test to see whether an instruction works by entering it
into the interactive shell. Don't worry about breaking the computer: the worst
that could happen is that Python responds with an error message. Professional
software develpers get error messages while writing code all the time.
