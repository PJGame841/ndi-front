export default function about() {
  return (
    <div id='container'>
      <div className='profilePic'>
        <mg
          src='http://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Sad_troll.png/618px-Sad_troll.png'
          width='100%'
        />
      </div>

      <div className='proclamation'>
        <h1>
          I might be a <span className='hacktivator'>TROLL</span>, but I
          don&apos;t troll Online.
        </h1>

        <ul>
          <li>I&apos;m respectful in online communities.</li>
          <li>I don&apos;t make fun of people.</li>
          <li>
            If I don&apos;t have something nice to say, I don&apos;t say
            anything.
          </li>
        </ul>
        <h1>When someone makes me feel bad, I look to:</h1>
        <ul>
          <li>
            The <a href='http://www.itgetsbetter.org/'>it gets better</a>{' '}
            campaign because their videos are inspiring.
          </li>
          <li>
            <a href='http://bornthisway'>Born this Way Foundation</a> because
            they helped me understand that I&apos;m awesome the way I am.
          </li>
          <li>
            The <a href='http://webmaker.org'>Mozilla Webmaker Community</a>{' '}
            because my ideas are always welcome.
          </li>
        </ul>
      </div>
    </div>
  );
}
