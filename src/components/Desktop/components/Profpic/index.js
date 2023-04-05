import './index.scss'
import Pic from '../../../../assets/images/profilepic.jpg'
import { useRef } from 'react'

const Profpic = () => {

    const bgRef = useRef();
    const outlinePicRefbot = useRef();
    const outlinePicReftop = useRef();
    const solidPicRef = useRef();

    return (
        <div className='pic-container' ref={bgRef}>
            <img ref={solidPicRef} className='solid-pic' src={Pic} alt="P" />
            <svg
                version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="300.000000pt" height="400.000000pt" viewBox="0 0 300.000000 400.000000">
                <g className="svg-container" transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
                    fill="none"
                    stroke="#CADF9E" strokeWidth="10px"
                >

                    <path ref={outlinePicReftop} d="M1359 2579 c19 -17 21 -24 10 -28 -21 -7 -67 -62 -80 -96 -6 -16 -14
-37 -18 -45 -4 -8 -8 -43 -9 -76 -2 -45 1 -63 11 -67 16 -6 30 -47 17 -47 -5
0 -11 6 -13 13 -2 6 -3 -1 -1 -17 5 -37 12 -44 25 -26 8 11 10 8 6 -12 -2 -16
-1 -28 3 -28 4 0 15 -21 25 -47 10 -27 32 -63 50 -81 36 -36 105 -64 125 -52
8 5 -2 10 -29 15 -45 7 -101 54 -101 83 1 9 10 28 21 42 18 21 27 24 82 22 34
-1 70 -5 81 -8 11 -4 16 -2 12 4 -7 12 -80 25 -135 25 -34 0 -43 -8 -55 -45
-15 -49 -61 34 -72 128 -5 42 -1 58 25 108 34 64 39 88 16 80 -8 -4 -15 -14
-15 -24 0 -36 -15 -27 -17 10 -3 44 32 84 74 86 15 0 29 6 31 13 3 10 -4 11
-27 6 -26 -6 -30 -4 -24 10 5 14 14 16 52 11 25 -4 69 -7 96 -8 28 0 53 -5 58
-12 5 -8 10 -7 16 4 6 8 13 11 18 6 4 -4 0 -12 -10 -17 -19 -11 -23 -29 -6
-29 13 0 34 -20 42 -40 3 -10 6 -6 7 10 1 14 4 20 6 13 3 -7 13 -9 22 -6 12 3
13 2 4 -4 -12 -9 -12 -46 1 -59 12 -12 8 -24 -8 -24 -18 0 -19 -11 -3 -45 15
-34 -5 -143 -37 -205 -41 -76 -48 -101 -31 -114 29 -22 8 -62 -53 -99 -31 -19
-63 -37 -71 -40 -10 -4 -8 -6 7 -6 11 -1 50 18 85 42 l63 42 -3 57 c-5 68 14
128 40 128 20 0 48 48 48 82 0 18 -2 20 -9 8 -6 -8 -7 -18 -5 -22 3 -4 1 -8
-5 -8 -19 0 -20 17 0 46 10 16 19 41 19 56 0 15 4 29 9 32 7 5 1 53 -12 101
-8 29 -30 55 -50 60 -13 4 -28 19 -34 36 -6 16 -18 29 -27 29 -9 0 -16 3 -16
8 0 4 -28 8 -63 10 -58 2 -102 8 -102 13 0 1 -9 3 -20 5 -11 1 -31 6 -45 10
l-25 7 24 -24z"/>
                    <path ref={outlinePicRefbot} d="M794 1435 c-18 -14 -18 -16 -1 -26 17 -10 16 -12 -3 -36 -15 -19 -19
-35 -15 -54 3 -15 1 -30 -4 -34 -16 -10 -13 -25 5 -25 13 0 15 -7 10 -35 -5
-25 -3 -35 6 -36 7 -1 0 -4 -17 -8 l-30 -6 24 -24 c23 -23 23 -25 6 -38 -11
-7 -24 -13 -29 -13 -17 0 -16 -48 1 -55 14 -5 13 -8 -2 -25 -10 -11 -14 -20
-9 -21 5 -1 20 -2 33 -2 15 -1 25 -9 27 -21 2 -15 -2 -17 -28 -12 -21 4 -28 2
-25 -7 2 -6 18 -12 35 -12 32 0 41 -8 22 -20 -7 -4 -7 -12 0 -25 14 -26 13
-30 -7 -23 -13 5 -15 3 -8 -13 4 -10 8 -28 7 -39 0 -11 2 -14 5 -7 8 20 26 14
20 -8 -3 -11 0 -20 5 -20 6 0 5 -6 -2 -15 -11 -13 -9 -20 10 -40 12 -13 20
-27 17 -32 -3 -5 3 -32 13 -62 9 -29 16 -74 15 -100 -3 -45 -1 -47 25 -49 27
-2 28 -1 19 25 -5 16 -15 60 -23 98 -7 39 -26 115 -40 170 -20 75 -26 119 -24
175 l3 75 47 3 c29 2 59 -3 78 -13 30 -15 31 -19 25 -58 -10 -60 -27 -117 -36
-117 -13 0 11 -71 31 -93 11 -11 22 -40 26 -65 4 -30 9 -40 15 -30 4 8 4 31
-1 51 -6 28 -5 37 5 37 34 0 18 -90 -37 -208 -39 -83 -43 -118 -24 -176 9 -25
16 -50 16 -55 0 -4 -89 -7 -197 -7 -168 1 -206 -2 -248 -17 -27 -10 -58 -27
-68 -38 -21 -22 -39 -25 -31 -5 5 12 -1 12 -33 4 -21 -6 -87 -14 -148 -17 -60
-4 -87 -8 -58 -9 28 -1 55 -6 58 -12 3 -5 -1 -10 -9 -10 -9 0 -16 -4 -16 -10
0 -15 36 -12 50 5 7 8 22 15 33 15 11 0 36 5 54 12 24 9 36 9 41 2 4 -6 21
-13 39 -16 25 -3 33 0 37 15 4 16 10 18 41 13 25 -5 35 -4 33 5 -4 17 58 29
93 19 22 -6 29 -5 29 5 0 7 6 15 13 17 17 7 38 -2 31 -13 -3 -5 1 -11 8 -13
26 -9 134 -13 163 -6 21 5 6 8 -50 9 -80 1 -126 14 -95 25 8 3 64 3 125 -2
l110 -7 3 -85 c4 -142 11 -190 29 -190 14 0 15 15 9 122 -4 67 -14 137 -21
155 -8 18 -14 34 -13 36 1 1 -5 19 -12 41 -15 45 -7 108 19 145 22 33 45 90
47 116 4 76 9 80 78 60 31 -9 63 -14 71 -11 8 3 17 2 19 -3 3 -4 19 -6 35 -3
23 3 36 -2 54 -21 20 -22 32 -26 88 -27 104 -1 172 9 195 31 11 10 27 19 36
19 8 0 35 7 59 15 48 17 89 13 89 -10 0 -15 -19 -22 -80 -29 -19 -2 -7 -2 28
-1 59 3 64 1 73 -22 5 -13 6 -35 3 -48 -4 -14 5 -60 21 -110 18 -56 25 -94 21
-112 -4 -16 -10 -41 -13 -58 -3 -16 -10 -36 -16 -43 -14 -17 -46 -159 -47
-204 0 -26 4 -38 14 -38 10 0 18 21 25 68 6 37 14 90 19 117 l8 50 44 1 c101
2 110 4 110 20 0 13 -12 15 -70 13 -39 -1 -72 0 -75 3 -3 3 2 22 11 44 20 48
14 113 -16 175 -17 36 -19 49 -11 72 12 32 29 34 63 7 14 -10 29 -16 33 -12 5
4 5 2 2 -4 -4 -6 -1 -25 5 -41 10 -26 9 -34 -10 -58 -12 -15 -22 -32 -22 -36
0 -14 27 -10 44 6 17 17 46 20 46 5 0 -5 -8 -11 -17 -11 -10 -1 0 -5 22 -9 30
-6 43 -5 51 6 15 18 34 18 34 -1 0 -12 14 -15 62 -15 75 0 68 16 -11 29 -29 5
-57 14 -61 21 -6 9 -11 7 -19 -9 -7 -11 -21 -21 -31 -21 -24 0 -26 13 -4 34
14 15 13 16 -16 16 -29 0 -32 2 -26 24 3 14 1 28 -6 32 -7 5 -9 2 -4 -7 4 -8
1 -5 -6 5 -7 11 -21 28 -30 38 -10 10 -18 24 -18 31 1 6 13 -3 29 -21 30 -35
41 -33 41 9 0 15 7 29 15 33 11 4 14 13 9 31 -5 21 -2 27 13 31 15 4 19 12 15
30 -2 14 0 35 7 47 6 12 15 40 19 62 7 35 11 40 35 39 18 -1 20 0 7 3 -18 4
-40 38 -40 60 0 3 14 3 31 -1 25 -5 32 -2 36 14 3 11 9 20 14 20 14 0 11 26
-4 39 -16 12 -9 81 12 119 10 18 9 23 -3 28 -19 7 -38 -4 -30 -18 4 -6 1 -9
-7 -6 -26 9 -22 56 7 83 l28 26 -23 16 -24 16 23 12 23 12 -21 19 c-12 10 -22
29 -22 42 0 13 -4 20 -10 17 -5 -3 -10 -37 -10 -75 0 -38 -4 -80 -10 -95 -8
-20 -5 -39 10 -83 12 -31 22 -79 24 -105 4 -46 2 -49 -24 -58 -24 -9 -29 -18
-35 -57 -10 -66 -30 -139 -53 -192 -11 -25 -23 -60 -27 -78 l-7 -33 -23 26
c-28 29 -92 36 -101 10 -10 -25 -24 -17 -24 14 0 34 17 50 27 25 12 -33 41 75
48 179 9 150 5 142 76 156 67 14 88 6 90 -33 0 -21 1 -20 11 2 24 49 -31 65
-154 46 -43 -7 -50 7 -20 39 16 19 16 19 -3 15 -18 -3 -20 -11 -20 -103 -1
-208 -4 -255 -19 -255 -8 0 -16 -5 -18 -12 -3 -8 -11 -7 -28 5 -14 9 -37 17
-52 17 -50 0 -173 -31 -181 -45 -11 -20 -30 -19 -129 5 -46 11 -109 20 -140
20 -60 0 -187 36 -232 65 -14 9 -31 13 -37 9 -7 -4 -9 -3 -6 3 3 5 -7 17 -23
26 l-28 17 18 57 c10 32 27 83 39 113 24 62 25 70 11 70 -5 0 -10 -7 -10 -15
0 -20 -20 -19 -35 2 -8 11 -32 18 -74 21 -58 4 -65 2 -92 -24 -21 -20 -32 -25
-40 -17 -14 14 3 76 26 99 9 9 14 23 10 32 -3 8 0 21 6 28 9 11 8 25 -1 59
-12 43 -10 92 6 183 7 35 -2 40 -32 17z m583 -791 c10 -1 36 -2 57 -3 22 0 36
-4 33 -8 -4 -4 -33 -6 -65 -4 -56 2 -89 21 -76 43 3 5 12 1 19 -9 8 -10 22
-18 32 -19z"/>
                </g>

            </svg>

        </div >
    )
}

export default Profpic