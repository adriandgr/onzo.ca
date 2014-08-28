---
layout: default
title: statement
permalink: /statement/
---


<pre>
import org.ubc.bfa;

/**
 * "El juego es una forma de ficción, un orden artificial
 * impuesto sobre el mundo."
 *               - La Trompeta de Deyá, Mario Vargas Llosa.
 */

public class ArtistStatement extends Theory {

  private degree = new bfa();
  private work =  new Theory();
  private boolean artworkSuccess = false;

  public static void main(String[] args) {
    bfa.setYearLevel(4);
    explainArtPractice(work);
    while (artworkSuccess == true) {
      System.out.println("The artwork has been institutionally validated");
    }
  }

  public void explainArtPractice(Theory w) {
    try {
      if(w.checkTheory() > 0) {
        artworkSuccess = true;
      } else {
        artworkSuccess = false;
      }
    } catch (FaultyLogic x) {
    }
  }
}
</pre>
**Artist statement submitted to _Marinate Me_, BFA graduation catalogue.** <br />
*Metafictitious program written in Java*<br />
2014


### Bio

Adrian Diaz was born in Mexico City, where he grew up. He moved to Sao Paulo from 2001 to 2006.

### Statement

Adrian Diaz is a performance art, photography, and installation artist.
Several of his works aim to explore the interplay of language and other coded
systems of vernacular cognizance through an attentiveness to space and the
objects that regulate them. He will often explore such environments through
a self-aware ritualism of his presence as artist.
