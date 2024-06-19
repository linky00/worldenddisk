+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
[params]
    titleFormat = []
    year = ''
    hero = ''
+++

{{< overview >}}

{{% overview-text %}}

{{% /overview-text %}}

{{< overview-images >}}

{{< /overview-images >}}

{{< /overview >}}