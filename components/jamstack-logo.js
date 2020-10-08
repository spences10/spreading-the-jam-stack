import React from 'react'

export const JamstackLogo = ({ textColor, width, height, text }) => {
  return (
    <svg
      width={!width ? '173' : width}
      height={!height ? '47' : height}
      viewBox={`0 0 ${text ? `173` : `47`} 47`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {text && (
        <path
          d="M65.969 19.68h3.734v14.965c0 1.743-.344 3.074-1.034 3.993-.69.92-1.79 1.379-3.303 1.379a9.14 9.14 0 01-1.839-.201v-3.131h.201c.058.019.115.028.173.028.861 0 1.417-.277 1.666-.833.268-.555.402-1.321.402-2.298V19.68zm-.488-4.051c0-.556.2-1.025.603-1.408.421-.402.996-.603 1.723-.603.728 0 1.312.201 1.753.603.46.383.689.852.689 1.408 0 .555-.23 1.024-.69 1.407-.44.364-1.024.546-1.752.546-.727 0-1.302-.182-1.723-.546a1.868 1.868 0 01-.603-1.407zM73.224 20.512c.766-.345 1.676-.613 2.73-.804a16.809 16.809 0 013.303-.316c.996 0 1.829.124 2.499.373.67.23 1.197.565 1.58 1.006.402.44.68.967.833 1.58.172.612.258 1.302.258 2.068 0 .843-.028 1.695-.086 2.556a55.668 55.668 0 00-.115 2.5c0 .823.029 1.627.086 2.412.058.767.201 1.494.431 2.184h-3.045l-.603-1.982h-.143c-.383.593-.92 1.11-1.61 1.55-.67.422-1.54.633-2.613.633-.67 0-1.274-.096-1.81-.288a4.213 4.213 0 01-1.379-.861 4.126 4.126 0 01-.89-1.322 4.53 4.53 0 01-.316-1.723c0-.881.191-1.618.574-2.212.403-.613.968-1.101 1.695-1.465.747-.383 1.628-.642 2.643-.776 1.034-.153 2.183-.2 3.447-.143.134-1.073.058-1.839-.23-2.298-.287-.48-.929-.719-1.924-.719-.747 0-1.542.077-2.385.23-.823.154-1.503.355-2.04.604l-.89-2.787zm4.74 10.686c.747 0 1.34-.163 1.781-.488.44-.345.766-.709.977-1.092v-1.867a10.435 10.435 0 00-1.724-.029 6.205 6.205 0 00-1.436.259c-.421.134-.757.325-1.005.574-.25.25-.374.565-.374.948 0 .537.153.958.46 1.264.325.288.766.431 1.321.431zM95.72 34.042v-7.813c0-1.322-.125-2.26-.374-2.816-.25-.555-.766-.833-1.551-.833-.651 0-1.178.182-1.58.546-.403.345-.709.795-.92 1.35v9.566h-3.734V19.679h2.901l.431 1.896h.115a6.674 6.674 0 011.666-1.609c.69-.46 1.57-.689 2.643-.689.92 0 1.666.191 2.24.575.594.363 1.054.986 1.38 1.867a5.219 5.219 0 011.694-1.781c.69-.44 1.523-.661 2.499-.661.805 0 1.485.096 2.04.287a2.714 2.714 0 011.379 1.006c.364.46.632 1.082.804 1.867.172.785.259 1.78.259 2.987v8.618h-3.735V25.97c0-1.13-.124-1.973-.373-2.528-.23-.574-.757-.862-1.58-.862-.67 0-1.207.182-1.609.546-.383.364-.67.862-.861 1.494v9.422h-3.735zM116.622 30.078c0-.383-.162-.69-.488-.92a5.884 5.884 0 00-1.206-.631 28.982 28.982 0 00-1.58-.575 6.542 6.542 0 01-1.58-.833 4.818 4.818 0 01-1.207-1.35c-.325-.555-.488-1.264-.488-2.126 0-1.417.421-2.499 1.264-3.246.843-.747 2.059-1.12 3.648-1.12 1.092 0 2.078.115 2.959.345.881.23 1.57.488 2.068.775l-.833 2.7c-.44-.172-.996-.354-1.666-.545a7.388 7.388 0 00-2.04-.288c-1.11 0-1.666.431-1.666 1.293 0 .345.163.623.489.833.325.21.727.412 1.206.603.479.173 1.006.364 1.58.575.575.21 1.101.488 1.58.833.479.326.881.756 1.206 1.293.326.536.489 1.225.489 2.068 0 1.455-.469 2.604-1.408 3.447-.919.823-2.307 1.235-4.165 1.235-1.015 0-1.972-.134-2.873-.402-.88-.249-1.599-.546-2.154-.89l1.034-2.787c.441.249 1.025.498 1.752.747.728.23 1.475.345 2.241.345.555 0 .996-.106 1.321-.316.345-.211.517-.565.517-1.063zM121.301 19.68h1.982v-2.701l3.735-1.063v3.763h3.504v3.16h-3.504v5.515c0 .996.095 1.714.287 2.155.21.421.593.632 1.149.632.383 0 .708-.039.977-.115.287-.077.603-.192.947-.345l.661 2.873c-.517.249-1.12.46-1.81.632a8.612 8.612 0 01-2.097.258c-1.321 0-2.298-.335-2.93-1.005-.612-.69-.919-1.81-.919-3.361v-7.24h-1.982V19.68zM132.723 20.512c.766-.345 1.676-.613 2.729-.804a16.82 16.82 0 013.304-.316c.996 0 1.829.124 2.499.373.67.23 1.197.565 1.58 1.006.402.44.68.967.833 1.58.172.612.258 1.302.258 2.068 0 .843-.028 1.695-.086 2.556a56.27 56.27 0 00-.115 2.5c0 .823.029 1.627.086 2.412.058.767.202 1.494.431 2.184h-3.045l-.603-1.982h-.143c-.383.593-.92 1.11-1.609 1.55-.67.422-1.542.633-2.614.633-.67 0-1.274-.096-1.81-.288a4.215 4.215 0 01-1.379-.861 4.13 4.13 0 01-.89-1.322 4.522 4.522 0 01-.316-1.723c0-.881.191-1.618.574-2.212.403-.613.968-1.101 1.695-1.465.747-.383 1.628-.642 2.643-.776 1.034-.153 2.183-.2 3.447-.143.134-1.073.058-1.839-.23-2.298-.287-.48-.929-.719-1.924-.719-.747 0-1.542.077-2.385.23-.823.154-1.503.355-2.039.604l-.891-2.787zm4.74 10.686c.747 0 1.341-.163 1.781-.488.441-.345.766-.709.977-1.092v-1.867a10.44 10.44 0 00-1.724-.029 6.2 6.2 0 00-1.436.259c-.421.134-.756.325-1.005.574-.249.25-.374.565-.374.948 0 .537.153.958.46 1.264.325.288.766.431 1.321.431zM157.229 33.151c-.574.422-1.273.738-2.097.948a9.048 9.048 0 01-2.499.345c-1.149 0-2.126-.182-2.93-.546a5.052 5.052 0 01-1.925-1.522c-.498-.67-.861-1.475-1.091-2.413-.211-.939-.316-1.973-.316-3.103 0-2.432.546-4.299 1.637-5.601 1.092-1.321 2.681-1.982 4.769-1.982 1.053 0 1.895.086 2.527.258a8.537 8.537 0 011.753.661l-.891 3.045a7.372 7.372 0 00-1.321-.488 5.593 5.593 0 00-1.465-.173c-1.034 0-1.819.345-2.356 1.035-.536.67-.804 1.752-.804 3.245 0 .613.067 1.178.201 1.695.134.517.335.967.603 1.35.268.383.613.69 1.034.92.441.21.948.316 1.523.316.632 0 1.168-.077 1.609-.23.44-.173.833-.374 1.177-.603l.862 2.843zM164.227 28.096h-1.005v5.946h-3.735V13.934h3.735v11.864l.861-.402 3.275-5.717h4.108l-3.447 5.458-1.465 1.092 1.58 1.12 3.878 6.693h-4.28l-3.505-5.946z"
          fill={!textColor ? '#000' : textColor}
        />
      )}
      <path
        d="M23.32.094C10.81.094.699 10.376.699 23.094s10.112 23 22.62 23c12.51 0 22.622-10.282 22.622-23v-23H23.32z"
        fill="#F0047F"
      />
      <path
        d="M6.485 23.569c.249 9.048 7.437 16.356 16.336 16.61v-16.61H6.485zM23.786 40.21c8.899-.254 16.087-7.562 16.336-16.61H23.786v16.61zM40.122 5.978H23.786v16.61h16.336V5.978z"
        fill="#fff"
      />
    </svg>
  )
}
