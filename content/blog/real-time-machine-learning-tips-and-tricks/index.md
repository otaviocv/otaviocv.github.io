+++
title = "Real-time machine learning: tips and tricks"
authors = ["Otávio Vasques"]
date = 2025-12-06
insert_anchor_links = "heading"
+++


{% crt() %}
```
                            .       .
                                 .  |  .
                                  \ | /    +
                          *        \|/
                              --==> * <==--   '
                             +     /|\   .
                                  / | \
                          .      '  |  '       *
                                    |
                              .     '    .
```
{% end %}

More than an year ago I developed a presentation summarizing all the practices,
kindly named as _tips and tricks_, for maintaining and operating real-time
machine learning models at the company I work for. This was first an internal
presentation that turned into a meetup presentation that turned into an editted
article. After more than one year of compiling this knowledge I decided to
revisit them and record an updated version of this text in my own website.

You can check the resources for the meetup talk, in portuguese, and the editted
article, in portuguese and english.

{{ youtube(id="4xZUpwiiJ68") }}

**[Practices to scale Machine Learning operations](https://building.nubank.com/practices-to-scale-machine-learning-operations/)**

# The real-time subset of this article

Real-time machine learning can represent various types of applications and
due this wide range of possibilities I would like to precisely describe what
I've been doing such that you can make the appropriate approximations
to other contexts.

I work with fraud prevention in a financial institution.
This means that I work developing automated decision systems
(not necessarily just machine learning models) that identify
_events_ that shouldn't happen, either by a legal violation or by a third party
malicious action. The key element here is that to provide good customer
experience and avoid tragedies is that we must identify the fraud in a given
event at moment it is happening. At the exact "approval" time, otherwise money
moves too fast for you to catch up later.

The most obvious and direct example is a credit card transaction. Imagine you
buying something at a sketchy online store, you know it is sketchy but
the price is too good to not take. You buy the thing and it never arrives at
your door. When you check the store again, it disappeared. A couple days later
misterious purchases notifications reach you and you know exactly how your card
numbers were leaked.

Applying machine learning to this problem means that at the moment a credit
card is getting our systems, real-time, you must decide to approve it or not.
The challenges of maintaining such systems start with respecting the SLA,
usually milliseconds or seconds, and applying this analysis to millions
of customer and pontentially billions of transactions.

My context is hyper focused in building models and systems that
scale very well to millions of customers, billions of transactions, and
can answer synchronously in milliseconds.

## A comparison with Batch models

To highlight the real-time elements of my context I like to compare with
batch models which, in my experience, are the preferred first approach
to any team trying to adopt automated decisions.

Batch models usually run in a fixed schedule, every once in a day,
a week, or a couple of hours. They take all the new instances that
were generated in the last time window and apply their predictions
to it. They are deployed in ETL/ELT systems and consume very big tables
usually. Real-time models consume multiple one row tables in the
other side.

These input tables for batch models may be composed of multiple
other tables and upstream sources that combined by a batch processing
system like Spark, Pandas, Databricks, Big Query. Meanwhile, real-time
models seek information in various forms, feature store like systems
with pre-computed data, batch tables that were loaded in some form
of fast database, the true source of the data in the form of a 
microservice and its APIs or other intermediate aggregation
services that hold temporary, short-lived data, just for the purpose
of building the features for a real-time model.

You can see that batch models can take up to the interval time duration
to finish its predicitions in this comparison. They have a lot more room
to fail, you can retry multiple times, and failures are not directly or
instantly forwarded to end customers.

The real challenges of maintaining real-time models don't live in the
model itself, there are challenges at optimizing model python code, but
rather in retrieving all the features required for its usage.




[_Stars_](https://www.asciiart.eu/space/stars)
