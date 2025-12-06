---
layout: page
title: Orlandia History
subtitle: A brief history of Orlandias past
---

<div class="row">
    <div class="col-md-6 col-md-offset-3">
        <div class="list-group">
        {% assign years = site.data.years %}
        {% for year in years %}
            {% assign link = year[1] %}
            <a href="{{ site.baseurl }}/history/{{ link.slug }}" class="list-group-item">
                <span class="badge">AFO {{link.year}}</span>
                {{link.name}}
            </a>
        {% endfor %} 
        </div>
    </div>
</div>