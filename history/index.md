---
layout: page
title: Orlandia History
subtitle: A brief history of Orlandias past
---

<div class="row">
    <div class="col-md-6 col-md-offset-3">
        <div class="list-group">
        {% for link in site.history-pages %}
            {% capture linkurl %}{{ site.baseurl }}/{{ link.href }}{% endcapture %}
            <a href="{{linkurl}}" class="list-group-item">
                <span class="badge">AFO {{link.year}}</span>
                {{link.name}}
            </a>
        {% endfor %} 
        </div>
    </div>
</div>