<template>
    <div>
        <div class="bg-coditive_gray">
            <div class="max-w-xl mx-auto p-4 md:px-0 py-8 mb-5 md:mb-9">
                <CoditiveHeader class="mb-3">
                    <template #text>
                        <h2 class="text-lg md:text-3xl font-semibold">
                            Realizacja kalkulatora VAT
                        </h2>
                    </template>
                </CoditiveHeader>
                <p class="text-neutral-500 max-w-2xl">
                    Aplikacja w Nuxt 4, która pozwala za pomocą komponentu osadzić formularz wyliczający kwotę brutto i kwotę podatku. Następnie wyświetlane są użytkownikowi odpowiednie informacje, a dane zapisywane są po stronie serwera.
                </p>
            </div>
        </div>
        <PriceCalculatorForm />
    </div>
</template>

<script setup>

</script>