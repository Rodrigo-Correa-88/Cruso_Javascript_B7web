const char = createKnight('Isildur')
const monster = createLittleMonster()


stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
)