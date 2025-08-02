const labels = document.querySelectorAll(".form-control label");

labels.forEach((l) => {
  l.innerHTML = l.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</Span>`
    )
    .join("");
});

