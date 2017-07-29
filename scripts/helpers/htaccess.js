/* eslint-disable max-len */

import path from 'path';

export default {
  path: path.resolve(__dirname, '../../.htaccess'),
  content: `
    <ifModule mod_rewrite.c>

      #######################################################################
      # GENERAL                                                             #
      #######################################################################

      # Make apache follow sym links to files
      Options +FollowSymLinks
      # If somebody opens a folder, hide all files from the resulting folder list
      IndexIgnore */*

      #######################################################################
      # REWRITING                                                           #
      #######################################################################

      # Enable rewriting
      RewriteEngine On

      # If its not HTTPS
      RewriteCond %{HTTPS} off

      # Comment out the RewriteCond above, and uncomment the RewriteCond below if you're using a load balancer (e.g. CloudFlare) for SSL
      # RewriteCond %{HTTP:X-Forwarded-Proto} !https

      # Redirect to the same URL with https://, ignoring all further rules if this one is in effect
      RewriteRule ^(.*) https://%{HTTP_HOST}/$1 [R,L]

      # If we get to here, it means we are on https://

      # If the file with the specified name in the browser doesn't exist
      RewriteCond %{REQUEST_FILENAME} !-f

      # and the directory with the specified name in the browser doesn't exist
      RewriteCond %{REQUEST_FILENAME} !-d

      # and we are not opening the root already (otherwise we get a redirect loop)
      RewriteCond %{REQUEST_FILENAME} !/$

      # Rewrite all requests to the root
      RewriteRule ^(.*) /

    </ifModule>
  `,
};
