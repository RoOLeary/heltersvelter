


<sl-progress-ring value="50" class="progress-ring-values" style="margin-bottom: .5rem;">50%</sl-progress-ring>

<br />

<sl-button circle><sl-icon name="dash" label="Decrease"></sl-icon></sl-button>
<sl-button circle><sl-icon name="plus" label="Increase"></sl-icon></sl-button>

<script>
    import '@shoelace-style/shoelace/dist/components/progress-ring/progress-ring.js';


    const progressRing = document.querySelector('.progress-ring-values');
    // @ts-ignore
    const subtractButton = progressRing.nextElementSibling.nextElementSibling;
    // @ts-ignore
    const addButton = subtractButton.nextElementSibling;

    // @ts-ignore
    addButton.addEventListener('click', () => {
        // @ts-ignore
        const value = Math.min(100, progressRing.value + 10);
        // @ts-ignore
        progressRing.value = value;
        // @ts-ignore
        progressRing.textContent = `${value}%`;
    });

    // @ts-ignore
    subtractButton.addEventListener('click', () => {
        // @ts-ignore
        const value = Math.max(0, progressRing.value - 10);
        // @ts-ignore
        progressRing.value = value;
        // @ts-ignore
        progressRing.textContent = `${value}%`;
    });

</script>