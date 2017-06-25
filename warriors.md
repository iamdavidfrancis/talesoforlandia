---
layout: page
title: Warriors of Orlandia
meta-description: A list of all the warriors of Orlandia Cards, by set
css:
  - "/css/card.css"
---

{% assign sets = site.data.warriors | group_by:"set" | sort:"name" %}
<div class="top-links">
Skip to set: {% for set in sets  %}<span class="top-link"><a href="#{{ set.name }}">{{ set.name }}</a></span> {% endfor %}
</div>

{% for set in sets  %}
<div class="row">
  <div class="col-md-12">
    <a name="{{ set.name }}"></a>
    <h3>{{ set.name }} Set</h3>
  </div>
  <div class="col-md-12">
    {% assign cardTypes = set.items | group_by:"card-type" | sort:"name" %}
    {% for cardType in cardTypes %}
      <div class="col-md-12">
        <a name="{{ set.name }}-{{ cardType.name }}"></a>
        <h4>{{ cardType.name }}</h4>
      </div>
      {% assign cards = cardType.items | sort:"name" %}
      {% for card in cards %}
      <div class="col-md-3 col-sm-12">
        <div class="card">
          <img class="card-img-top" src="http://statics.orlandia.talesoforlandia.com/warriors/cards/{{ set.name }}/{{ cardType.name | downcase}}/{{ card.url }}-thumb.png" alt="{{ card.name }}">
          <div class="card-block">
            <h5 class="card-title">{{ card.name }}</h5>
            <a href="http://statics.orlandia.talesoforlandia.com/warriors/cards/{{ set.name }}/{{ cardType.name | downcase}}/{{ card.url }}.png" class="btn btn-primary card-link" target="_blank">View Full Sized</a>
          </div>
        </div>
      </div>
      {% endfor %}
    {% endfor %}
  </div>
</div>
{% endfor %}