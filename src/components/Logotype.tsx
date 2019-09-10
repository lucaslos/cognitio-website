import React from 'react';

type Props = {
  textColor?: string;
  height?: number;
};

const Logotype = ({ textColor = '#232822', height = 48 }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" height={height} viewBox="0 0 236 74">
    <path
      fill={textColor}
      className="type"
      d="M68.773 47.576c1.465 0 2.69-.41 3.674-1.23.996-.832 1.535-1.905 1.617-3.217h2.022a6 6 0 01-1.09 3.181c-.668.95-1.558 1.694-2.672 2.233a7.97 7.97 0 01-3.55.809c-2.497 0-4.477-.868-5.942-2.602-1.453-1.734-2.18-4.066-2.18-6.996v-.633c0-1.875.328-3.533.985-4.974.656-1.442 1.593-2.555 2.812-3.34 1.23-.785 2.666-1.178 4.307-1.178 2.086 0 3.803.621 5.15 1.863 1.36 1.242 2.086 2.877 2.18 4.905h-2.022c-.093-1.489-.632-2.69-1.617-3.604-.972-.914-2.203-1.371-3.691-1.371-1.899 0-3.375.685-4.43 2.056-1.043 1.372-1.564 3.294-1.564 5.766v.615c0 2.426.521 4.319 1.564 5.678 1.055 1.36 2.537 2.04 4.447 2.04zm15.592-8.367c0-1.828.351-3.475 1.054-4.94.715-1.464 1.717-2.601 3.006-3.41 1.3-.82 2.772-1.23 4.412-1.23 2.531 0 4.582.89 6.153 2.672 1.57 1.77 2.355 4.119 2.355 7.049v.44c0 1.839-.357 3.497-1.072 4.974-.703 1.464-1.7 2.595-2.989 3.392-1.289.797-2.76 1.196-4.412 1.196-2.52 0-4.57-.885-6.152-2.655-1.57-1.781-2.355-4.137-2.355-7.066v-.422zm2.109.58c0 2.273.586 4.143 1.758 5.608 1.183 1.453 2.73 2.18 4.64 2.18 1.899 0 3.434-.727 4.606-2.18 1.183-1.465 1.775-3.393 1.775-5.784v-.404c0-1.453-.27-2.783-.808-3.99-.54-1.207-1.295-2.139-2.268-2.795-.973-.668-2.086-1.002-3.34-1.002-1.875 0-3.404.738-4.588 2.215-1.183 1.465-1.775 3.386-1.775 5.765v.387zm23.607-.474c0-2.977.656-5.333 1.968-7.067 1.325-1.746 3.118-2.62 5.379-2.62 2.59 0 4.559 1.032 5.907 3.095l.105-2.742h1.969v18.632c0 2.45-.686 4.389-2.057 5.819-1.371 1.43-3.228 2.144-5.572 2.144a8.452 8.452 0 01-3.797-.896c-1.195-.586-2.139-1.371-2.83-2.356l1.178-1.265c1.488 1.828 3.257 2.742 5.308 2.742 1.758 0 3.129-.522 4.113-1.565.985-1.03 1.495-2.466 1.53-4.306v-2.39c-1.348 1.874-3.311 2.812-5.889 2.812-2.203 0-3.973-.88-5.308-2.637-1.336-1.758-2.004-4.131-2.004-7.12v-.28zm2.127.369c0 2.425.486 4.341 1.459 5.748.972 1.394 2.343 2.091 4.113 2.091 2.59 0 4.424-1.16 5.502-3.48v-8.842c-.492-1.219-1.201-2.144-2.127-2.777-.926-.645-2.039-.967-3.34-.967-1.77 0-3.146.697-4.131 2.092-.984 1.383-1.476 3.428-1.476 6.135zm25.909-9.703l.07 3.251c.715-1.172 1.606-2.062 2.672-2.671 1.067-.622 2.244-.932 3.533-.932 2.039 0 3.557.574 4.553 1.723.996 1.148 1.5 2.87 1.512 5.168V49h-2.092V36.502c-.012-1.7-.375-2.965-1.09-3.797-.703-.832-1.834-1.248-3.392-1.248-1.301 0-2.455.41-3.463 1.23-.996.81-1.735 1.905-2.215 3.288V49h-2.092V29.98h2.004zM163.482 49h-2.11V29.98h2.11V49zm-2.479-24.521c0-.399.129-.733.387-1.002.258-.282.609-.422 1.054-.422.446 0 .797.14 1.055.422.27.27.404.603.404 1.002 0 .398-.134.732-.404 1.002-.258.269-.609.404-1.055.404-.445 0-.796-.135-1.054-.405a1.393 1.393 0 01-.387-1.002zm16.699.632v4.87h3.937v1.722h-3.937v12.674c0 1.055.187 1.84.562 2.355.387.516 1.025.774 1.916.774.352 0 .92-.059 1.705-.176l.088 1.723c-.551.199-1.301.299-2.25.299-1.441 0-2.49-.416-3.146-1.248-.657-.844-.985-2.08-.985-3.71v-12.69h-3.498V29.98h3.498v-4.869h2.11zM193.574 49h-2.109V29.98h2.109V49zm-2.479-24.521c0-.399.129-.733.387-1.002.258-.282.609-.422 1.055-.422.445 0 .797.14 1.054.422.27.27.405.603.405 1.002 0 .398-.135.732-.405 1.002-.257.269-.609.404-1.054.404-.446 0-.797-.135-1.055-.405a1.393 1.393 0 01-.387-1.002zm12.269 14.73c0-1.828.352-3.475 1.055-4.94.715-1.464 1.717-2.601 3.006-3.41 1.301-.82 2.771-1.23 4.412-1.23 2.531 0 4.582.89 6.152 2.672 1.571 1.77 2.356 4.119 2.356 7.049v.44c0 1.839-.358 3.497-1.073 4.974-.703 1.464-1.699 2.595-2.988 3.392-1.289.797-2.76 1.196-4.412 1.196-2.52 0-4.57-.885-6.152-2.655-1.571-1.781-2.356-4.137-2.356-7.066v-.422zm2.11.58c0 2.273.586 4.143 1.757 5.608 1.184 1.453 2.731 2.18 4.641 2.18 1.898 0 3.434-.727 4.605-2.18 1.184-1.465 1.776-3.393 1.776-5.784v-.404c0-1.453-.27-2.783-.809-3.99-.539-1.207-1.295-2.139-2.267-2.795-.973-.668-2.086-1.002-3.34-1.002-1.875 0-3.404.738-4.588 2.215-1.184 1.465-1.775 3.386-1.775 5.765v.387z"
    />
    <path
      stroke="#F90"
      strokeLinecap="round"
      strokeWidth="2.12"
      d="M16.635 8.51c5.246 8.13 16.392 25.824 16.094 39.035-.27 11.953-12.696 15.602-18.299 17.575M56.995 8.51C51.749 16.64 40.603 34.334 40.9 47.545c.27 11.953 12.696 15.602 18.299 17.575"
    />
  </svg>
);

export default Logotype;
