---
layout: default
title: home
shadowbox: true
---

{% highlight java %}
import org.ubc.bfa;

/**
 * "El juego es una forma de ficción, un orden artificial
 * impuesto sobre el mundo."
 *              - La Trompeta de Deyá, Mario Vargas Llosa.
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
{% endhighlight %}
**Artist statement submitted to _Marinate Me_, BFA graduation catalogue.** <br />
*Metafictitious program written in Java*<br />
2014
