const uttt_3x3 = {
    name: 'uttt_3x3',
    width: 450,
    height: 450,
    x: 3, y: 3,
    grid_template: '1fr 1fr 1fr',
    grid_gap: '16px 19.3px',
    top: '36px',
    left: '20px'
}
const uttt_4x4 = {
    name: 'uttt_4x4',
    width: 600, 
    height: 600,
    x: 4, y: 4,
    grid_template: 'repeat(4, 1fr)',
    grid_gap: '22px 18.3px',
    top: '30px'
}
const uttt_5x5 = {
    name: 'uttt_5x5',
    width: 700,
    height: 700,
    x: 5, y: 5,
    slot_size: '110px',
    grid_template: 'repeat(5, 1fr)',
    grid_gap: '20.7px 19.2px',
    top: '35px',
    left: '35px'
}
const uttt_6x6 = {
    name: 'uttt_6x6',
    width: 700,
    height: 700,
    x: 6, y: 6,
    grid_template: 'repeat(6, 1fr)',
    grid_gap: '14.5px 14.7px',
    slot_size: '96px',
    top: '25px',
    left: '25px'
}
const uttt_8x8 = {
    name: 'uttt_8x8',
    width: 700,
    height: 700,
    x: 8, y: 8,
    grid_template: 'repeat(8, 1fr)',
    grid_gap: '12.7px 12.5px',
    slot_size: '70px',
    top: '26px',
    left: '25px'
}
const uttt_hexagon = {
    name: 'uttt_hexagon',
    width: 700,
    height: 600,
    x: 5, y: 5,
    grid_template: 'repeat(5, 1fr)',
    grid_gap: '12.4px 18.2px',
    slot_size: '100px',
    top: '26px',
    left: '62px',
    disabled_map: [
        [0,1,3,4],
        [0,4],
        [],
        [0,4],
        [0,1,3,4]
    ]
}
const uttt_triangle = {
    name: 'uttt_triangle',
    width: 1050,
    height: 580,
    x: 7, y: 7,
    grid_template: 'repeat(7, 1fr)',
    grid_gap: '14px 15px',
    slot_size: '100px',
    top: '106px',
    left: '134px',
    disabled_map: [
        [0,1,2,4,5,6],
        [0,1,5,6],
        [0,6],
        [],
        [0,1,2,3,4,5,6],
        [0,1,2,3,4,5,6],
        [0,1,2,3,4,5,6],
    ]
}
const uttt_curve = {
    name: 'uttt_curve',
    height: 700,
    width: 700,
    x: 6, y: 6,
    grid_template: 'repeat(6, 1fr)',
    grid_gap: '14.3px 14.2px',
    slot_size: '96px',
    top: '28px',
    left: '26px',
    disabled_map: [
        [],
        [],
        [],
        [3,4,5],
        [3,4,5],
        [3,4,5]
    ]
}
const uttt_rectangle = {
    name: 'uttt_rectangle',
    height: 480,
    width: 880,
    x: 6, y: 6,
    grid_template: 'repeat(6, 1fr)',
    grid_gap: '19px 18.5px',
    slot_size: '118px',
    top: '43px',
    left: '41px',
    disabled_map: [
        [],
        [],
        [],
        [0,1,2,3,4,5],
        [0,1,2,3,4,5],
        [0,1,2,3,4,5]
    ],
    default_straight_num: 3,
    default_cross_num: 3
}
const uttt_shift = {
    name: 'uttt_shift',
    width: 800,
    height: 500,
    x: 5, y: 5,
    grid_template: 'repeat(5, 1fr)',
    grid_gap: '27px 26px',
    top: '42px',
    left: '41px',
    slot_size: '123px',
    disabled_map: [
        [3,4],
        [0,4],
        [0,1],
        [0,1,2,3,4],
        [0,1,2,3,4]
    ]
}