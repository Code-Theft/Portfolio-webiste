/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 * 
 * @author Janajith D
 */

import React from "react";
import Link from "@components/Link";
import Button from "@components/Button";
import HomeIcon from "@icons/Home";

export default function Home() {
  return (
    <>
      <p>Home Page</p>
      <HomeIcon/><Link href="new page">Hello</Link>
      <Button variant="contained">Hello NextJS</Button>

    </>
  );
}
